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

  return { ...msg, ...registerIssue };
}

async function deleteIssue( id ) {
  const msg = {
    delete: true,
    info: 'successful'
  }

  let issueId =  await issueModel.deleteIssue( id );

  if( !issueId ) {
    msg.delete = false;
    msg.info = 'is not possible delete'

    return msg;
  }

  return msg;
}

module.exports = {
  addIssue,
  deleteIssue,
};