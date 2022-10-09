// http
const http = require('node:http');

// listen request
const listenRequest = require('./listen-request.js');

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
        listenRequest(request, response, routers);
    });

    // listen
    server.listen(port || 5277);

    // return
    return server;
};