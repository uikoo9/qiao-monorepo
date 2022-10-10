// routers
const routers = {};

// init
const initMethods = require('./init/init-methods.js');
const initStatic = require('./init/init-static.js');
const initListen = require('./init/init-listen.js');
const initController = require('./init/init-controller.js');

/**
 * app
 */
module.exports = function () {
    let app = {};
    initMethods(app, routers);
    initStatic(app, routers);
    initListen(app, routers);
    initController(app);

    return app;
};