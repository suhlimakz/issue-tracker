const userService = require('../services/user'); 

async function login( req, res, next ) {
  const { email, password } = req.body; 

  return res.json( await userService.validateLogin( email, password ) );
}

async function  getUserByName( req, res, next ) {
  const { username } = req.body;

  return res.json( await userService.getUserByName( username ) );
}

async function listAllUsers( req, res ) {
  const users = await userService.listAllUsers();

  console.log( users );
  // // return res.json( users);
  return res.json( { ping: 'pong' } );
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
  app.get( '/list-users', listAllUsers );
  app.post( '/add-user', addUser );
}

module.exports = {
  set,
};
