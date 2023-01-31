const { DB_CONNECTION_STRING } = require('../utils/constants');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: DB_CONNECTION_STRING,
  },
};
