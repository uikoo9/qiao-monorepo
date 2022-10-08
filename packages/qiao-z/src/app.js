// http
const http = require('node:http');

// methods
const METHODS = require('./util/methods.js');

// res
const res = require('./res.js');

/**
 * app
 */
const app = exports = module.exports = {};

/**
 * listen
 * @param {*} port 
 * @returns 
 */
app.listen = function (port) {
    // server
    const server = http.createServer();

    // listen
    server.listen(port || 5277);

    // server
    this.server = server;
    this.server.on('checkContinue', () => {
        console.log('checkContinue');
    });
    this.server.on('checkExpectation', () => {
        console.log('checkExpectation');
    });
    this.server.on('clientError', (err) => {
        console.log('clientError', err);
    });
    this.server.on('close', () => {
        console.log('close');
    });
    this.server.on('connect', () => {
        console.log('connect');
    });
    this.server.on('dropRequest', () => {
        console.log('dropRequest');
    });
    this.server.on('upgrade', () => {
        console.log('upgrade');
    });
};

/**
 * get
 * @param {*} path 
 * @param {*} callback 
 * @returns 
 */
app.get = function (path, callback) {
    if (!this.server) {
        console.log('please listen port!');
        return;
    }

    this.server.on('request', (request, response) => {
        if (request.method != METHODS.get) return;

        res.response = response;

        callback(request, res);
    });
};