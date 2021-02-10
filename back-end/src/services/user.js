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

async function addNewUser( name, pass, email, photo, level, isActive ) {
  const msg = {
    register: true,
    msg: ""
  }

  let registerUser = await userModel.addUser( name, pass, email, photo, level, isActive );

  if( !registerUser  ) {
    msg.register = false;
    msg.msg = "failed register user";

    return msg;
  }

  return { ...msg, ...registerUser };
}

module.exports = {
  validateLogin,
  addNewUser,
}; 
