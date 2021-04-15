const { getToken } = require( '../controllers/authentication' );
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

  const token = getToken( email );
  
  return { ...user, ...obj, token };
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

async function updateUser( user ) {
  const msg = {
    update: true,
    info: 'update sucessful'
  }

  let updateUser = await userModel.updateUser( user );

  if( !updateUser ) {
    msg.update = false;
    msg.info = 'is not possible update';

    return msg;
  }

  return{ ...msg, ...updateUser };
}

module.exports = {
  validateLogin,
  getUserByName,
  listAllUsers,
  addNewUser,
  deactivateUser,
  updateUser,
}; 
