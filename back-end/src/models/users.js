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
  const [ results ] = await connection.query(sql)

  connection.end();

  return results[ 0 ];
}

module.exports = {
  getUserByEmail,
  getUserByEmailAndPassword,
};