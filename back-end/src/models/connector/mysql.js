const mysql = require( 'mysql2/promise' );

function getConnection() {
  const connection = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'issueTracker'
  } );

  return connection;
}

module.exports = {
  getConnection,
}
