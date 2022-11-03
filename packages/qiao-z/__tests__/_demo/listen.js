// http
const http = require('http');

// server
const server = http.createServer();

// request
server.on('request', () => {
    console.log('request');
});

// listen
server.listen(8080);