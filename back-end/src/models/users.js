const {connection} = require( '../models/connector/mysql' );

function getUserByEmail( email ) {
  connection.connect();

  const sql = `SELECT * FROM user u WHERE  email = '${email}'; ` ;
 
  connection.query(  sql , function( error, results ) {
    if( error ) throw error;
    console.log( {results: email} );
    
    connection.end();

    return results;
  } )

}

function getUserByEmailAndPassword( email, pass ) {
  connection.connect();

  const sql = `SELECT * FROM user u WHERE  email = '${email}' AND password = '${pass}'; ` ;
  
  connection.query( sql, function( error, results ) {
    if( error ) throw error;
      console.log( results );
      
      connection.end();

      return results;
  } )
  // return users.filter( u => u.useremail == email && u.password == pass )[0]
}

// getUserByemail( 'Maria Soares' );
getUserByEmailAndPassword( 'mariasoares@email.com', 'senhaDaMariaSoares' );

module.exports = {
  getUserByEmail,
  getUserByEmailAndPassword,
}; 
