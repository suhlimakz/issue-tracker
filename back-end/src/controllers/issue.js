const issueService = require( '../services/issue' );

async function newIssue( req, res, next ) {
  const { title, createBy, dueDate, priority, status, assignee, releaseId, description } = req.body;
  const issue = {
    title,
    createBy, 
    dueDate,
    priority,
    status,
    assignee,
    releaseId,
    description
  }

  return res.json( await issueService.addIssue( issue ) );
}

async function deleteIssue( id ) {

}

function set( app ) {
  app.post('/new-issue', newIssue );
  app.post( '/delete-issue', deleteIssue );
}

module.exports = {
  set,
};