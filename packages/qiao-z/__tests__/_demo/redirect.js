// http
const http = require('http');

// server
const server = http.createServer();

// request
server.on('request', (request, response) => {
    console.log('request');

    const url = 'https://insistime.com/';

    response.writeHead(302, { 'Location': url });
    response.end();
});

// listen
server.listen(8080);