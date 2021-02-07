const express = require( 'express' );
const app = express();
const users = require( './controllers/users' );
const port = 9001;

app.get( '/', function( req, res  ) {
  res.json( { ping: 'pong' } );
} );

app.use( express.json() );

users.set( app );

app.listen( port, function() {
  console.log( `I live in port  ${port}` );
} );
