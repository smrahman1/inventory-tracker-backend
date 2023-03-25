const { DB_CONNECTION_STRING } = require('../utils/constants');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'pg',
  version: '7.2',
  connection: DB_CONNECTION_STRING,
};
