const data = require('../models/users');

function validateLogin( email, password ) {
  const obj = {
    isValid: true,
    msg: ""
  }

  if( !data.getUserByEmail( email )) {
    obj.isValid = false;
    obj.msg = "invalid user";

    return obj;
  }

  if( !data.getUserByEmailAndPassword( email, password ) ){
    obj.isValid = false;
    obj.msg = "wrong password";

    return obj;
  }
  
  return obj;
}

module.exports = {
  validateLogin,
}; 
