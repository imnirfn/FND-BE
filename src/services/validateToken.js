const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyToken = (req, res, next) => {
  const authToken = req.header('Authorization');

  // If request does not include `Authorization` header
  // Aku ikut error type and error description kat sini
  // https://tools.ietf.org/id/draft-ietf-oauth-v2-bearer-22.xml#ExAccTokResp
  if (!authToken) {
    return res.status(401).json({
      error: 'invalid_request',
      message: 'Missing Authorization header'
    });
  }

  try {
    const [tokenType, token] = authToken.split(' ');

    // If token is not Bearer type
    if (tokenType !== 'Bearer') {
      return res.status(401).json({
        error: 'invalid_token',
        error_description: 'Access token should have Bearer type'
      });
    }

    const verified = jwt.verify(token, config.tokenSecret);
    req.user = verified;
    // Continue middleware execution
    next();
  } catch (err) {
    res.status(401).json({
      error: 'invalid_token',
      error_description: 'The access token is either nonexistent or expired'
    });
  }
};

module.exports = verifyToken;
