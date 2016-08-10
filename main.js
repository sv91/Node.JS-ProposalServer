var http = require("http");
var fs = require("fs");

http.createServer(function (request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8081,"0.0.0.0");


var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
  console.log('connection succesful');

  eventEmitter.emit('data_received');
}
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
  console.log('data received succesfully');
});

eventEmitter.emit('connection');

console.log("Program Ended");
