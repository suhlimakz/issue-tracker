const data = require('../models/users');

function validateLogin( username, password ) {
  const obj = {
    isValid: true,
    msg: ""
  }

  if( !data.getUserByName( username )) {
    obj.isValid = false;
    obj.msg = "invalid user";

    return obj;
  }

  if( !data.getUserByNameAndPassword( username, password ) ){
    obj.isValid = false;
    obj.msg = "wrong password";

    return obj;
  }
  
  return obj;
}

module.exports = {
  validateLogin,
}; 
