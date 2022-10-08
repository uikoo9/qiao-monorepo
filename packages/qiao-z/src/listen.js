// http
const http = require('node:http');

// out
const out = require('./out.js');

/**
 * listen
 * @param {*} port 
 * @param {*} routers 
 * @returns 
 */
module.exports = function (port, routers) {
    // server
    const server = http.createServer();

    // on
    server.on('checkContinue', () => {
        console.log('checkContinue');
    });
    server.on('checkExpectation', () => {
        console.log('checkExpectation');
    });
    server.on('clientError', (err) => {
        console.log('clientError', err);
    });
    server.on('close', () => {
        console.log('close');
    });
    server.on('connect', () => {
        console.log('connect');
    });
    server.on('dropRequest', () => {
        console.log('dropRequest');
    });
    server.on('upgrade', () => {
        console.log('upgrade');
    });

    // request
    server.on('request', (request, response) => {
        handleRequests(routers, request, response);
    });

    // listen
    server.listen(port || 5277);

    // return
    return server;
};

// handle requests
function handleRequests(routers, request, response) {
    if (!routers || !routers.length) return;

    // handle req
    const req = require('./req.js')(request);

    // handle res
    const res = require('./res.js')(response);

    // check
    let check;
    for (let i = 0; i < routers.length; i++) {
        const r = handleRequest(routers[i], req, res);
        if(r) check = true;
    }

    // res
    if(!check){
        out.error(response, 'can not get router');
        return;
    }
}

// handle get request
function handleRequest(r, req, res) {
    // check method
    if (r.method.toUpperCase() != req.request.method) return;

    // check path
    if(r.path != '/*' && r.path != req.url.pathname) return;

    // callback
    r.callback(req, res);

    // return
    return 1;
}