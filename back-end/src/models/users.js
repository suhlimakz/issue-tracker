const { getConnection } = require('../models/connector/mysql');

async function getUserByEmail(email) {
  const connection = await getConnection();
  const sql = `SELECT id FROM user u WHERE  email = '${email}'; `;
  const [ results ] = await connection.query(sql)

  connection.end();

  return results[ 0 ];
}

async function getUserByEmailAndPassword(email, pass) {
  const connection = await getConnection();
  const sql = `SELECT id, name, email, photo, level FROM user u WHERE  email = '${email}' AND password = '${pass}'; `;
  const [ results ] = await connection.query(sql);

  connection.end();

  return results[ 0 ];
}

async function listUserByNameForManager( name ) {
  const connection = await getConnection();
  const sql = `SELECT id, name, email, photo, level FROM user u WHERE name='${ name }';`;
  const [ results ] = await connection.query( sql );

  connection.end();

  console.log( results );

  return results[ 0 ];
}

async function addUser( name, pass, email, photo, level, isActive ) {
  const connection = await getConnection();
  const sql = `INSERT INTO user( name, password, email, photo, level, isActive )
                      VALUES ( 
                         '${ name }', 
                         '${ pass }',
                         '${ email }',
                         '${ photo }',
                         '${ level }',
                         '${ isActive }' 
                         );`

  const [ results ] = await connection.query( sql );

  connection.end();

  // console.log( results );
  return results;
}

// addUser( 'Luiz Antonio', '678ghi', 'luizantonio@email.com', 'photoLuizAntonio','1','1' );

module.exports = {
  getUserByEmail,
  getUserByEmailAndPassword,
  listUserByNameForManager,
  addUser,
};