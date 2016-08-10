var http = require("http");
var fs = require("fs");

http.createServer(function (request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8081,"0.0.0.0");

console.log("Server running");

var data = fs.readFile('input.txt', function (err,data){
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log("Program Ended");
