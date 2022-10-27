// routers
const routers = {};

// init
import initMethods from './init/init-methods.js';
import initStatic from './init/init-static.js';
import initListen from './init/init-listen.js';
import initController from './init/init-controller.js';

/**
 * app
 */
export default () => {
    let app = {};
    initMethods(app, routers);
    initStatic(app, routers);
    initListen(app, routers);
    initController(app);

    return app;
};