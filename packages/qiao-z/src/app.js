// init
import initGet from './init/init-get.js';
import initStatic from './init/init-static.js';
import initPost from './init/init-post.js';
import initController from './init/init-controller.js';

// listen
import listen from './listen/listen.js';

// routers
const routers = {};

// cros options
const crosOptions = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
};

/**
 * app
 */
export default () => {
    const app = {};

    // init
    app.init = init;

    // listen
    app.listen = (port) => {
        listen(port || '5277', routers, app);
    };

    // init get
    initGet(app, routers);

    // init static
    initStatic(app, routers);

    // init post
    initPost(app, routers);

    // init controller
    initController(app);

    return app;
};

// init app
function init(options) {
    if (!options) return;

    // cros
    if (options.cros) {
        this._cros = options.cros === true ? crosOptions : (options.cros || {});
    }

    // checks
    if (options.checks) {
        this._checks = options.checks;
    }

    // modules
    if (options.modules && options.config) {
        const that = this;
        options.modules.forEach(m => {
            m(that, options.config);
        });
    }

    // upload
    if (options.upload) {
        this._upload = options.upload;
    }
}