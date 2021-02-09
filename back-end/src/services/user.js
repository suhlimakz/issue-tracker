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

module.exports = {
  validateLogin,
}; 
