require('dotenv').config({ path: '../../.env' });

const { PORT, DB_CONNECTION_STRING, CORS_WHITELISTED_DOMAINS, JWT_SECRET } =
  process.env;

module.exports = {
  PORT,
  DB_CONNECTION_STRING,
  CORS_WHITELISTED_DOMAINS,
  JWT_SECRET,
};
