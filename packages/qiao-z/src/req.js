// parseurl
const parseurl = require('parseurl');

/**
 * req
 * @param {*} request 
 * @returns 
 */
module.exports = function(request){
    const req = {};
    req.request = request;
    req.url = parseurl(request);
    req.headers = handleHeaders(request);

    return req;
};

// handle headers
function handleHeaders(request){
    const headers = {};

    // check
    const rawHeaders = request.rawHeaders;
    if(!rawHeaders || !rawHeaders.length) return headers;

    // handle
    rawHeaders.forEach((h, i) => {
        if(i % 2 == 0) headers[h] = rawHeaders[i+1];
    });
    return headers;
}