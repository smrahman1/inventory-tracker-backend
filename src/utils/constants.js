require('dotenv').config({ path: '../../.env' });

const PORT = process.env.PORT;
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const CORS_WHITELISTED_DOMAINS = process.env.CORS_WHITELISTED_DOMAINS;

module.exports = { PORT, DB_CONNECTION_STRING, CORS_WHITELISTED_DOMAINS };
