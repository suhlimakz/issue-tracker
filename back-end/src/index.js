const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const { validateToken } = require( '.controllers/authentication' );
const userController = require( './controllers/users' );
const issueController = require( './controllers/issue' );
const port = 9001;

app.get( '/', function( req, res  ) {
  res.json( { ping: 'pong' } );
} );

app.use( express.json() );

app.use( bodyParser.json() )
app.use( validateToken );

userController.set( app );
issueController.set( app );

app.listen( port, function() {
  console.log( `I live in port  ${port}` );
} );
