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

async function deleteIssue( req, res, next ) {
  const { id } = req.body;

  return res.json( await issueService.deleteIssue( id ) );
}

async function selectIssuesActive( req, res ) {
  const issues = await issueService.selectIssuesActive();

  return res.json( issues );
}

function set( app ) {
  app.post('/new-issue', newIssue );
  app.post( '/delete-issue', deleteIssue );
  app.get( '/issues', selectIssuesActive );
}

module.exports = {
  set,
};