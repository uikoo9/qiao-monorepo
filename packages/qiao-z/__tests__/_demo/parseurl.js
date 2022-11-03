// http
const http = require('http');

// server
const server = http.createServer();

// request
server.on('request', (request, response) => {
    console.log('request');

    var url = require('parseurl')(request);
    console.log('url:', url);

    response.end('hello world');
});

// listen
server.listen(8080);