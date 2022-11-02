// init
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
export default () => {
    const app = {};

    // init
    app.init = init;

    // methods
    initMethods(app, routers);

    // static
    initStatic(app, routers);

    // controller
    initController(app);

    // listen
    app.listen = listenServer;

    return app;
};

// init app
function init(options) {
    if (!options) return;

    // cros
    if (options.cros) this._cros = options.cros;

    // checks
    if (options.checks) this._checks = options.checks;

    // modules
    if (options.modules && options.config) {
        const that = this;
        options.modules.forEach(m => {
            m(that, options.config);
        });
    }
}

// listen
function listenServer(port) {
    listen(port || '5277', routers, this);
}