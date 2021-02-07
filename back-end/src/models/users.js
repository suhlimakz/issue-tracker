const users = [ 
  {
    "username": "Maria",
    "password": "1234"
  },
  {
    "username": "Pedro",
    "password": "4321"
  },
  {
    "username": "José",
    "password": "5678"
  },
  {
    "username": "Ana",
    "password": "8765"
  },
  {
    "username": "Maria",
    "password": "2468"
  },
];

function getUserByName( name ) {
  return users.filter( u => u.username === name )[0]
}

function getUserByNameAndPassword( name, pass ) {
  return users.filter( u => u.username == name && u.password == pass )[0]
}

module.exports = {
  getUserByName,
  getUserByNameAndPassword,
}; 
