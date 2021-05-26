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

async function selectIssuesActive() {
  const msg = {
    select: true,
    info: 'successful'
  }

  let selectIssuesActive = await issueModel.selectIssuesActive();

  if( !selectIssuesActive ) {
    msg.select = false;
    msg.info = 'is not possible select';
    
    return msg;
  }
  
  return { ...selectIssuesActive, ...msg };
}

async function updateIssue( issue ) {
  const msg = {
    update: true,
    info: 'update sucessful'
  }

  let updateIssue = await issueModel.updateIssue( issue );

  if( !updateIssue ) {
    msg.update = false;
    msg.info = 'is not possible update';

    return msg;
  }

  return {...msg, ...updateIssue };
}

async function completedIssue() {
  const msg = {
    select: true,
    info: 'successful'
  }

  let completedIssue = await issueModel.completedIssue();

  if( !completedIssue ) {
    msg.select = false;
    msg.info = 'is not possible select';

    return msg;
  }

  return { ...completedIssue, ...msg };
}

module.exports = {
  addIssue,
  deleteIssue,
  selectIssuesActive,
  updateIssue,
  completedIssue,
};