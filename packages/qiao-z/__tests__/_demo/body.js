// http
const http = require('http');

// raw body
const getRawBody = require('raw-body');

// server
const server = http.createServer();

// request
server.on('request', async (request, response) => {
    console.log('request');

    // headers
    const headers = handleHeaders(request);

    // content type
    const contentType = headers['content-type'];

    // options
    const options = {
        length: headers['content-length'],
        limit: '1mb',
        encoding: true
    };

    // body str
    let body;
    const bodyString = await getRawBody(request, options);
    if(contentType.indexOf('application/x-www-form-urlencoded') > -1){
        body = require('qs').parse(bodyString);
    }
    if(contentType.indexOf('application/json') > -1){
        body = JSON.parse(bodyString);
    }
    console.log(contentType, bodyString, body);

    response.end('hello world');
});

// listen
server.listen(8080);

// handle headers
function handleHeaders(request) {
    const headers = {};

    // check
    const rawHeaders = request.rawHeaders;
    if (!rawHeaders || !rawHeaders.length) return headers;

    // handle
    rawHeaders.forEach((h, i) => {
        if (i % 2 == 0) headers[h.toLowerCase()] = rawHeaders[i + 1];
    });
    return headers;
}