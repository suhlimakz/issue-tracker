const app = require( 'express' )();
const port = 3001;

app.get( '/', function( req, res  ) {
  res.json( { ping: 'pong' } );
} );

app.get( '/user/login', function( req, res ) {
  res.send(  )
} )

app.listen( port, function() {
  console.log( `I live in port  ${port}` );
} );
