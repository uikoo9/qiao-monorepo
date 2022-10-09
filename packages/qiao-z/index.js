// routers
const routers = {};

// init
const initMethods = require('./src/init/init-methods.js');
const initListen = require('./src/init/init-listen.js');
const initController = require('./src/init/init-controller.js');

/**
 * app
 */
module.exports = function () {
    let app = {};
    initMethods(app, routers);
    initListen(app, routers);
    initController(app);

    return app;
};