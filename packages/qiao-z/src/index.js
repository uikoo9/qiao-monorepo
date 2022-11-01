// routers
const routers = {};

// init
import initMethods from './init/init-methods.js';
import initOptions from './init/init-options.js';
import initStatic from './init/init-static.js';
import initListen from './init/init-listen.js';
import initController from './init/init-controller.js';

/**
 * app
 */
export default () => {
    let app = {};
    initMethods(app, routers);
    initOptions(app, routers);
    initStatic(app, routers);
    initListen(app, routers);
    initController(app);

    return app;
};