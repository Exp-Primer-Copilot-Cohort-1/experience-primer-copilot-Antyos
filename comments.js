// Create web server with Node.js
// Run: node comment.js
// Access: http://localhost:3000/
// Access: http://localhost:3000/about

var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
  var path = url.parse(request.url).pathname;
  response.writeHead(200, {'Content-Type': 'text/html'});
  if (path == '/') {
    response.write('Hello World!');
  } else if (path == '/about') {
    response.write('About');
  } else {
    response.write('404 Not Found');
  }
  response.end();
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');