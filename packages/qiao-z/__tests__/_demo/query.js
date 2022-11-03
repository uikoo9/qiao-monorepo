// http
const http = require('http');

// server
const server = http.createServer();

// request
server.on('request', (request, response) => {
    console.log('request');

    const url = require('parseurl')(request);
    const query = require('qs').parse(url.query);
    console.log('query:', query);

    response.end('hello world');
});

// listen
server.listen(8080);