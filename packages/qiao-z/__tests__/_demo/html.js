// http
const http = require('http');

// server
const server = http.createServer();

// request
server.on('request', (request, response) => {
    console.log('request');

    const htmlPath = require('path').resolve(__dirname, '../views/index.html');
    const html = require('fs').readFileSync(htmlPath, { encoding: 'utf8' });
    
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(html);
    response.end();
});

// listen
server.listen(8080);