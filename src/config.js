require('dotenv').config({ silent: true });

/**
 * Any config from dotenv will be loaded here
 */
module.exports = {
  port: process.env.PORT || 8080,
  dbUser: process.env.DBUSER,
  dbPassword: process.env.DBPASSWORD,
  dbhost: process.env.DBHOST,
  database: process.env.DATABASE,
  mongoURL: process.env.MONGOURL,
  tokenSecret: process.env.TOKEN_SECRET
};
