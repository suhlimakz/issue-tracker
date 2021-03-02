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
  const connection = await getConnection();
  const sql = `DELETE FROM issue WHERE id = ${ id };`;

  const [ results ] = await connection.query( sql );

  connection.end();

  return results;
}

async function selectIssuesActive() {
  const activeIssue = 1 ;

  const connection = await getConnection();
  const sql = `SELECT * FROM issueTracker.issue i
               WHERE status = ${ activeIssue }
               ORDER BY priority, dueDate;`;

  const [ results ] = await connection.query( sql );

  connection.end();
  return results;
}

module.exports = {
  addIssue,
  deleteIssue,
  selectIssuesActive,
};