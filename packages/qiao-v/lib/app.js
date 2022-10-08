// http
const http = require('node:http');

// methods
const METHODS = require('./util/methods.js');

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

    // return
    this.server = server;
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

        callback(request, response);
    });
};