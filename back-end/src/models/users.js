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

async function getUserByName( name ) {
  const connection = await getConnection();
  const sql = `SELECT id, name, email, photo, level FROM user u WHERE name='${ name }';`;
  const [ results ] = await connection.query( sql );

  connection.end();

  return results;
}

async function listAllUsers() {
  const connection = await getConnection();
  const sql = `SELECT id, name, email, photo, level  FROM user u WHERE isActive = true;`;
  const [ results ] = await connection.query( sql );

  connection.end();
  
  return results;
}

async function addUser( user ) {
  const { name, password, email, photo, level } = user;

  const connection = await getConnection();
  const sql = `INSERT INTO user( name, password, email, photo, level )
                      VALUES ( 
                         '${ name }', 
                         '${ password }',
                         '${ email }',
                         '${ photo }',
                         '${ level }'
                         );`

  const [ results ] = await connection.query( sql );

  connection.end();

  return results;
}

module.exports = {
  getUserByEmail,
  getUserByEmailAndPassword,
  getUserByName,
  listAllUsers,
  addUser,
};