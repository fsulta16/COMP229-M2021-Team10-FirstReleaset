/**
 * Module dependencies.
 *  File name: server.ts, 
    Author's name: Ofovwe Ewere, Farishta Sultani
    Student's id: 301188196, 301079757
    Web App name: Tournament Server
    Date: July 18, 2021
 */
import createError from 'http-errors';
import app from './Server/Config/app';
import debug from 'debug';
debug('comp308-m2021-team10-firstrelease:server');
import http from 'http';

/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

 function normalizePort(val:string): number | string | boolean 
 {
   let port = parseInt(val, 10);
 
   if (isNaN(port)) 
   {
     // named pipe
     return val;
   }
 
   if (port >= 0) 
   {
     // port number
     return port;
   }
 
   return false;
 }

/**
 * Event listener for HTTP server "error" event.
 */
 
function onError(error:createError.HttpError): void 
{
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening(): void 
{
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
