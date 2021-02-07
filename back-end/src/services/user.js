const user = {
  "username": "Maria",
  "password": "1234"
}

function validateLogin( username, password ) {
  const obj = {
    isValid: true,
    msg: ""
  }

  if( username != user.username ) {
    obj.isValid = false;
    obj.msg = "invalid user";

    return obj;
  }

  if( password != user.password ) {
    obj.isValid = false;
    obj.msg = "wrong password";

    return obj;
  }
  
  return obj;
}

module.exports = {
  validateLogin,
}; 
