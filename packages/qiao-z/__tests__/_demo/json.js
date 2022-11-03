// http
const http = require('http');

// server
const server = http.createServer();

// request
server.on('request', (request, response) => {
    console.log('request');

    const obj = {
        name: 'jack'
    };
    const json = JSON.stringify(obj);

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(json);
});

// listen
server.listen(8080);