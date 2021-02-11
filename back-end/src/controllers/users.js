const userService = require('../services/user'); 

async function login( req, res, next ) {
  const { email, password } = req.body; 

  return res.json( await userService.validateLogin( email, password ) );
}

async function listUser( req, res, next ) {
  const { username } = req.body;

  return res.json( await userService.listUser( username ) );
}

async function addUser( req, res, next ){
  const { name, password, email, photo, level } = req.body;
  const user = {
    name,
    password,
    email,
    photo,
    level
  }

  return res.json( await userService.addNewUser( user ) );

}

function set( app ) {
  app.post( '/login', login );
  app.post( '/list-user', listUser );
  app.post( '/add-user', addUser )
}

module.exports = {
  set,
};
