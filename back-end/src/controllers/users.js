const userService = require('../services/user'); 

function login( req, res, next ) {
  const { username, password } = req.body; 

  return res.json( userService.validateLogin( username, password ) )
}

function set( app ) {
  app.post( '/login', login );
}

module.exports = {
  set,
};
