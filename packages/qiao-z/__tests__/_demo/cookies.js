// http
const http = require('http');

// server
const server = http.createServer();

// request
server.on('request', (request, response) => {
    console.log('request');

    const cookies = 'test=hello';
    const obj = require('cookie').parse(cookies);
    console.log('cookies:', obj);

    response.end('hello world');
});

// listen
server.listen(8080);