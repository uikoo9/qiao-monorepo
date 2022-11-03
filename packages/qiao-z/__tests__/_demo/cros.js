// http
const http = require('http');

// server
const server = http.createServer();

// request
server.on('request', (request, response) => {
    console.log('request');

    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
    });

    response.end('hello world');
});

// listen
server.listen(8080);