// http
import http from 'http';

// listen request
import listenRequest from './listen-request.js';

/**
 * listen
 * @param {*} port 
 * @param {*} routers 
 * @returns 
 */
export default (port, routers, cros) => {
    if (!routers) return;

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
        listenRequest(request, response, routers, cros);
    });

    // listen
    server.listen(port);
};