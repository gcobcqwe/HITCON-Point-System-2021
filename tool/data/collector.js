const { GoogleSpreadsheet } = require('google-spreadsheet');
const { signToken } = require('./auth');
const crypto = require('crypto');
const fs = require('fs').promises;
const docID = '1h4KXNITYVWn_AQIrtpj5RM8Bz3s00EJE5_xXfMzGW2o';
const credentialsPath = './credential.json';
const sheetID = '402048441';
const userFilePath = "./users.csv";
const eventFilePath = "./events.csv";

/**
 * Fetch google sheet. 
 * Format: [ 'private_kktix_code','nick_name','role','points','email' ]
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
    const headerLength = rows[0]? rows[0]._sheet.headerValues.length: 0;
    for (row of rows) {
      const userData = row._rawData;
      if (!rowValidator(userData, headerLength)) continue;
      const uid = await sha256(userData[0]);
      const role = userData[2];
      userData.unshift(uid);
      result.users.push(userData.join(','));
      const eventData = eventGenerator(uid, role)
      result.events.push(eventData.join(','));
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
 * @return {Boolean}
 */
function rowValidator(data, headerLength) {
  try {
    if (data.length < headerLength) return false;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === '') return false;
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

