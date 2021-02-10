const userService = require('../services/user'); 

async function login( req, res, next ) {
  const { email, password } = req.body; 

  return res.json( await userService.validateLogin( email, password ) );
}

async function listUser( req, res, next ) {
  const { username } = req.body;

  return res.json( await userService.listUser( username ) );
}

function set( app ) {
  app.post( '/login', login );
  app.post( '/list-user', listUser );
}

module.exports = {
  set,
};
