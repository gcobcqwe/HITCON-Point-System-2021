const { GoogleSpreadsheet } = require('google-spreadsheet');
const { signToken } = require('./auth');
const crypto = require('crypto');
const fs = require('fs').promises;
const docID = '1h4KXNITYVWn_AQIrtpj5RM8Bz3s00EJE5_xXfMzGW2o';
const credentialsPath = './credential.json';
const sheetID = '402048441';
const userFilePath = "./users.csv";
const eventFilePath = "./events.csv";
const USERS_COLUMN = {
  PRIVATE_KKTIX_CODE: 0,
  NICK_NAME: 1,
  ROLE: 2,
  POINTS: 3,
  EMAIL: 4,
  ONE_PAGE_TOKEN: 5,
};

/**
 * Fetch google sheet. 
 * Format: {USERS_COLUMN}
 * @param {String} docID the document ID
 * @param {String} sheetID the google sheet table ID
 * @param {String} credentialsPath the credentials path, default is './credential.json'
 */
async function getData(docID, sheetID, credentialsPath) {
  try {
    const result = {users: [], events:[]};
    const doc = new GoogleSpreadsheet(docID);
    const cred = require(credentialsPath);
    await doc.useServiceAccountAuth(cred);
    await doc.loadInfo();
    const sheet = doc.sheetsById[sheetID];
    const rows = await sheet.getRows();
    for (let [index, remoteRow] of rows.entries()) {
      let userData = [...remoteRow._rawData];
      const isRowValid = rowValidator(userData, USERS_COLUMN.EMAIL + 1);
      const isOnePageTokenNullable = !remoteRow.one_page_token? true: false;

      if (!isRowValid) {
        console.warn(`The row ${index} is invalid: ${userData}.`);
        continue;
      }
      const role = userData[USERS_COLUMN.ROLE];
      const uid = await sha256(userData[USERS_COLUMN.PRIVATE_KKTIX_CODE]);

      /**
       * Compose events data.
       * Format: ["<UID>,<ONE_PAGE_TOKEN>,<KOF_SERVER_TOKEN>,<ONLINE_TOKEN>,<POINT_SYSTEM_TOKEN>",...]
       */
      const eventData = eventGenerator(uid, role);
      const onePageToken = eventData[1];
      result.events.push(eventData.join(','));

      /**
       * Compose users data.
       * Format: ["<UID>,<PRIVATE_KKTIX_CODE>,<ROLE>,<POINTS>,<EMAIL>",...]
       * e.g. ["8b01600a25fe070bb51ed957ea1922d367728fc34d1c47b9e1f65db32ad3443b,f8ca1cc047e7f0419bb09761e211d467,Jack,client,2000,test@gmail.com,...]
       */
      userData.unshift(uid);
      if (!isOnePageTokenNullable) userData.pop();
      result.users.push(userData.join(','));

      // Write the one page token to the remote google sheet when one_page_token is empty.
      if (isOnePageTokenNullable) {
        remoteRow.one_page_token = onePageToken;
        await remoteRow.save();
      }
    }
    return result;
  } catch(e) {
    console.error(e);
  }
};

/**
 * Attempt to covert text to hash using sha256.
 * @param {String} text the text you want to hash
 * @return {String}
 */
async function sha256(text) {
  try {
    return crypto.createHash("SHA256").update(text).digest("hex");;
  } catch(e) {
    console.error(e);
  }
}

/**
 * For checking row attribute in google sheet is valid. Filter null or incomplete data.
 * @param {Array} data the row data
 * @param {Number} pointer check if data is valid till this position
 * @return {Boolean}
 */
function rowValidator(data, pointer) {
  try {
    if (data.length < pointer) return false;
    for (let i = 0; i < pointer; i++) {
      if (data[i] === '') return false;
      // Replace special characters('+',',',' ') with a "%" followed by two hexadecimal digits.
      data[i] = data[i].replace(/\+/g,'%2B').replace(/\,/g,'%2C').replace(/ /g,'%20');
    }
    return true;
  } catch(e) {
    console.error(e);
  }
}

/**
 * Attempt use user uid to generate event data.
 * @param {String} uid the uid
 * @param {String} role the role
 * @return {Array}
 */
function eventGenerator(uid, role) {
  try {
    const onePageToken = signToken(uid, `one_page point_system ${role}`);
    const kofServerToken = signToken(uid, `kof_server ${role}`);
    const onlineToken = signToken(uid, `online point_system ${role}`);
    const pointSystemToken = signToken(uid, `point_system ${role}`);
    return [uid, onePageToken, kofServerToken, onlineToken, pointSystemToken];
  } catch(e) {
    console.error(e);
  }
}

/**
 * Compose account text and output a file.
 * @param {String} filePath the output file path
 * @param {String} text the output text
 */
async function composeOutput(filePath, text) {
  try {
    await fs.writeFile(filePath, text);
  } catch(e) {
    console.error(e);
  }
}

(async () => {
  const data = await getData(docID, sheetID, credentialsPath);
  await composeOutput(userFilePath, data.users.join('\n'));
  await composeOutput(eventFilePath, data.events.join('\n'));
  console.info("Done.");
})();

