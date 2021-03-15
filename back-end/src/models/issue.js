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

async function updateIssue( issue ) {
  const { id, title, createBy, dueDate, priority, status, assignee, releaseId, description } = issue;
  
  const connection = await getConnection();

  const sql = `UPDATE issue
               SET
                title = '${ title }',
                createBy = ${ createBy },
                dueDate = '${ dueDate }',
                priority = ${ priority },
                status = ${ status },
                assignee = ${ assignee },
                releaseId = ${ releaseId },
                description = '${ description }'
               WHERE id = ${ id };`;

  const [ results ] = await connection.query( sql );

  connection.end();
  
  return issue;
}

module.exports = {
  addIssue,
  deleteIssue,
  updateIssue,
};