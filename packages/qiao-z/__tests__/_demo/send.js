// http
const http = require('http');

// server
const server = http.createServer();

// request
server.on('request', (request, response) => {
    console.log('request');

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('hello world');
});

// listen
server.listen(8080);