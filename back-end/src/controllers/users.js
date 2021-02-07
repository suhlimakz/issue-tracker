const userService = require('../services/user'); //users services

function login( req, res, next ) {
  const { username, password } = req.body; //pegando dados da request


  return res.json( userService.validateLogin( username, password ) ) // retorno da função validate login
}


function set( app ) {
  //trocar get por post
  app.post( '/login', login );
}

module.exports = {
  set,
};
