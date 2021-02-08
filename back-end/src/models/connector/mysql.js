const mysql = require( 'mysql' );
const connection = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'issueTracker'
} );

module.exports = {
  connection,
}
