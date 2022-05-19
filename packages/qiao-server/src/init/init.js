// init
import initApp from './init-app.js';
import initStatic from './init-static.js';
import initMids from './init-mids.js';
import initModules from './init-modules.js';
import initController from './init-controller.js';
import initView from './init-view.js';

/**
 * init
 * @param {*} options 
 * @returns 
 */
export const init = (options) => {
    // check
    if(!options) return;

    // config
    if(options.config) global.config = options.config;

	// init app
    const app = initApp();
    initStatic(app, options);
    initMids(app, options);
    initModules(app, options);
    initController(app);
    initView(app);
	app.listen(global.config.port);

	// return 
	return app;
};