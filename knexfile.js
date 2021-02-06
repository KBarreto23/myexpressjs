// Update with your config settings.

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER,SQL_PORT} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

// module.exports = {

//   development: {
//     client: 'mssql',
//     connection: {
//       user: SQL_USER,
//       password: SQL_PASSWORD,
//       server: SQL_SERVER,
//       port: Number(SQL_PORT),
//       database: SQL_DATABASE,
//       options: {
//         encrypt: sqlEncrypt,
//         enableArithAbort: true
//       }, 
//     },
//     useNullAsDefault: true
//   },

// };

const knex = require('knex')({
  client: 'mssql',
    connection: {
      user: SQL_USER,
      password: SQL_PASSWORD,
      server: SQL_SERVER,
      port: Number(SQL_PORT),
      database: SQL_DATABASE,
      options: {
        encrypt: sqlEncrypt,
        enableArithAbort: true
      }, 
    },
});

module.exports = knex