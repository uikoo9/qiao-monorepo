// listen
const listen = require('../listen.js');

/**
 * init listen
 * @param {*} app 
 * @param {*} routers 
 * @returns 
 */
module.exports = function (app, routers) {
    app.listen = function (port) {
        this.server = listen(port, routers);
    };
};