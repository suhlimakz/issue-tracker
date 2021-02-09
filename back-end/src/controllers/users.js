const userService = require('../services/user'); 

async function login( req, res, next ) {
  const { email, password } = req.body; 

  return res.json( await userService.validateLogin( email, password ) )
}

function set( app ) {
  app.post( '/login', login );
}

module.exports = {
  set,
};
