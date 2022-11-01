// routers
const routers = {};

// init
import initCros from './init/init-cros.js';
import initCheck from './init/init-check.js';
import initMethods from './init/init-methods.js';
import initStatic from './init/init-static.js';
import initListen from './init/init-listen.js';
import initController from './init/init-controller.js';
import initModules from './init/init-modules.js';

/**
 * app
 */
export default () => {
    let app = {};

    // cros
    initCros(app);
    initCheck(app);

    // methods
    initMethods(app, routers);
    initStatic(app, routers);

    // listen
    initListen(app, routers);

    // controller
    initController(app);
    initModules(app);

    return app;
};