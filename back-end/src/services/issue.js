const issueModel = require('../models/issue');

async function addIssue( issue ) {
  const msg = {
    register: true,
    info: '' 
  }

  let registerIssue = await issueModel.addIssue( issue );

  if( !registerIssue ) {
    msg.register = false;
    msg.info = 'failed register user';

    return msg;
  }

  console.log( msg );
  return { ...msg, ...registerIssue };
}

module.exports = {
  addIssue,
};