var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  //200 means everything is just peachy; everything else is from Google
  //this is a header set, so we know what the webpage is
  res.end('Hi! The time is now ' + new Date);
  //sends to user to display; you can write whatever you want.
});

server.listen(3000);
