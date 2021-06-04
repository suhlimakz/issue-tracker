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

async function updateIssue( req, res, next ) {
  const { id, title, createBy, dueDate, priority, status, assignee, releaseId, description } = req.body;
  const issue = {
    id,
    title,
    createBy, 
    dueDate,
    priority,
    status,
    assignee,
    releaseId,
    description
  }

  return res.json( await issueService.updateIssue( issue ) );
}

function set( app ) {
  app.post('/issues', newIssue );
  app.delete( '/issues', deleteIssue );
  app.get( '/issues', selectIssuesActive );
  app.put( '/issues',updateIssue );
}

module.exports = {
  set,
};