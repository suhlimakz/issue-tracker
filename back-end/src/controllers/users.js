const userService = require('../services/user'); 

function login( req, res, next ) {
  const { email, password } = req.body; 

  return res.json( userService.validateLogin( email, password ) )
}

function set( app ) {
  app.post( '/login', login );
}

module.exports = {
  set,
};
