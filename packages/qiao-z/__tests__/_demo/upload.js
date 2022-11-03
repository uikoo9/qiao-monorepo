// http
const http = require('http');

// server
const server = http.createServer();

// request
server.on('request', async (request, response) => {
    console.log('request');

    // headers
    const headers = handleHeaders(request);

    // content type
    const contentType = headers['content-type'];

    // body
    if(contentType.indexOf('multipart/form-data') > -1){
        const body = await require('qiao-z-upload').uploadSync(request);
        console.log(contentType, body);
    }

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