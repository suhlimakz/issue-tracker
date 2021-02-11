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

async function listUser ( username ) {
  const msg = {
    isValid: true,
    msg: 'user located'
  }

  let userList = await userModel.listUserByNameForManager( username );

  if( !userList ) {
    msg.isValid = false;
    msg.msg =  'invalid user';

    return msg;
  } 
  
  return { ...userList, ...msg };
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

module.exports = {
  validateLogin,
  listUser,
  addNewUser,
}; 
