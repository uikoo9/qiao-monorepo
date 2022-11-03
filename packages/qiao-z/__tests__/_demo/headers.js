// http
const http = require('http');

// server
const server = http.createServer();

// request
server.on('request', (request, response) => {
    console.log('request');

    console.log('headers:', request.rawHeaders);

    response.end('hello world');
});

// listen
server.listen(8080);