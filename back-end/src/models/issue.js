const { getConnection } = require( '../models/connector/mysql' );

async function addIssue( issue ) {
  const { title, createBy, dueDate, priority, status, assignee, releaseId, description } = issue;

  const connection = await getConnection();
  const sql = `INSERT INTO issue( title, createBy, dueDate, priority, status, assignee, releaseId, description )
                      VALUES (
                        '${ title }',
                        '${ createBy }',
                        '${ dueDate }',
                        '${ priority }',
                        '${ status }',
                        '${ assignee }',
                        '${ releaseId }',
                        '${ description }'
                      );`

  const [ results ] = await connection.query( sql );

  connection.end();

  return results;
}

async function deleteIssue( id ) {

}



module.exports = {
  addIssue,
  deleteIssue,
};