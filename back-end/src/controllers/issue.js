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

async function activeIssue( req, res ) {
  const issues = await issueService.activeIssue();

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

async function completedIssue( req, res ) {
  const issues = await issueService.completedIssue();

  return res.json( issues );
}

function set( app ) {
  app.post('/issues', newIssue );
  app.delete( '/issues', deleteIssue );
  app.get( '/issues', activeIssue );
  app.put( '/issues',updateIssue );
  app.get( '/issues/done', completedIssue )
}

module.exports = {
  set,
};