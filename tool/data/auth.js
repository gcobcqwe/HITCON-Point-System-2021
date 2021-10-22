const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

/**
 * Sign access token for different services.
 * @param {String} sub uid unique id.
 * @param {String} scope service scope.
 * @return {String} access token
 */
function signToken(sub, scope) {
  /**
   * @see https://www.iana.org/assignments/jwt/jwt.xhtml#claims
   * iss: The issuer of the token.
   * sub: The subject of the token.
   * iat: The time the JWT was issued. Can be used to determine the age of the JWT.
   * exp: This will probably be the registered claim most often used.
   * This will define the expiration in NumericDate value. The expiration MUST be after the current date/time.
   * scope: The scope of the token. e.g. one_page, online, kof_server, etc.
   */
  const payload = {
    iss: 'https://hitcon.org',
    sub,
    iat: 1634832000, // 2022/10/22
    exp: 1640966400, // 2022/01/01
    scope
  };
  return jwt.sign(payload, secret);
};

module.exports = {
  signToken
};
