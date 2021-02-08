const {connection} = require( '../models/connector/mysql' );

function getUserByName( name ) {
  connection.connect();

  const sql = `SELECT * FROM user u WHERE  name = '${name}'; ` ;
 
  connection.query(  sql , function( error, results ) {
    if( error ) throw error;
    console.log( {results: name} );
    
    connection.end();

    return results;
  } )

}

function getUserByNameAndPassword( name, pass ) {
  connection.connect();
  
  const sql = `SELECT * FROM user u WHERE  name = '${name}' AND password = '${pass}'; ` ;
  
  connection.query( sql, function( error, results ) {
    if( error ) throw error;
      console.log( results );
      
      connection.end();

      return results;
  } )
  // return users.filter( u => u.username == name && u.password == pass )[0]
}

// getUserByName( 'Maria Soares' );
// getUserByNameAndPassword( 'Maria Soares', 'senhaDaMariaSoares' );

module.exports = {
  getUserByName,
  getUserByNameAndPassword,
}; 
