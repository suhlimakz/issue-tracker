const issueService = require( '../services/issue' );

async function newIssue( req, res, next ) {
  
}

function set( app ) {
  app.post('/new-issue', newIssue );
}

module.exports = {
  set,
};