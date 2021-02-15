const userModel = require('../models/users');

async function validateLogin( email, password ) {
  const obj = {
    isValid: true,
    msg: ""
  }

  let user =  await userModel.getUserByEmail( email );

  if( !user ) {
    obj.isValid = false;
    obj.msg = "invalid user";

    return obj;
  }

  user = await userModel.getUserByEmailAndPassword( email, password ) ;

  if( ! user ){
    obj.isValid = false;
    obj.msg = "wrong password";

    return obj;
  }
  
  return { ...user, ...obj };
}

async function getUserByName( username ) {
  const msg = {
    isValid: true,
    msg: 'user located'
  }

  let user = await userModel.getUserByName( username );

  if( !user ) {
    msg.isValid = false;
    msg.msg =  'invalid user';

    return msg;
  } 

  return { ...user, ...msg };
}

async function listAllUsers() {
  const msg = {
    isValid: true,
    msg: 'user located'
  }

  let allListUsers = JSON.stringify( await userModel.listAllUsers() );
  allListUsers = JSON.parse( allListUsers );

  if( !allListUsers ) {
    msg.isValid = false;
    msg.msg = 'error'

    return msg;
  }  

  return{ ...msg, ...allListUsers  };
}

async function addNewUser( user ) {
  const msg = {
    register: true,
    msg: ""
  }

  let registerUser = await userModel.addUser( user );

  if( !registerUser  ) {
    msg.register = false;
    msg.msg = "failed register user";

    return msg;
  }

  return { ...msg, ...registerUser };
}

async function deactivateUser( userID ) {
  const msg = {
    isValid: true,
    msg: 'update successful' 
  }

  let id =  await userModel.deactivateUser( userID );

  if( !id ) {
    msg.isValid = true;
    msg.msg = 'error';

    return msg;
  }

  return msg ;
}

module.exports = {
  validateLogin,
  getUserByName,
  listAllUsers,
  addNewUser,
  deactivateUser,
}; 
