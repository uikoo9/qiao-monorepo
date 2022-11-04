// init
import initApp from './init/init-app.js';
import initMethods from './init/init-methods.js';
import initStatic from './init/init-static.js';
import initController from './init/init-controller.js';

// listen
import listen from './listen/listen.js';

// routers
const routers = {};

/**
 * app
 */
export default (options) => {
    const app = {};
    
    // init methods
    initMethods(app, routers);
    
    // init static
    initStatic(app, routers);
    
    // init controller
    initController(app);

    // init app
    initApp(app, options);

    // listen
    app.listen = (port) => {
        listen(port || '5277', routers, app);
    };

    return app;
};