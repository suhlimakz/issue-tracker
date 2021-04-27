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

  return res.json( users);
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

async function deactivateUser( req, res, next ) {
  const { id } = req.body;

  return res.json( await userService.deactivateUser( id ) );
}

async function updateUser( req, res, next ) {
  const { id, name, password, email, photo, level, isActive } = req.body;
  const user = {
    id,
    name,
    password,
    email,
    photo,
    level,
    isActive
  }

  return res.json( await userService.updateUser( user ) );
}


function set( app ) {
  app.post( '/login', login );
  app.get( '/users', listAllUsers );
  app.post( '/users', addUser );
  app.patch( '/users', deactivateUser );
  app.put( '/users', updateUser );
}

module.exports = {
  set,
};
