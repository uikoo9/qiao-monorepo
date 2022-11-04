// cros options
const crosOptions = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
};

/**
 * init app
 * @param {*} options 
 * @returns 
 */
const initApp = (app, options) => {
    if (!app || !options) return;

    // cros
    if (options.cros) {
        app._cros = options.cros === true ? crosOptions : (options.cros || {});
    }

    // checks
    if (options.checks) {
        app._checks = options.checks;
    }

    // modules
    if (options.modules && options.config) {
        options.modules.forEach(m => {
            m(app, options.config);
        });
    }

    // upload
    if (options.upload) {
        app._upload = options.upload;
    }
};

export default initApp;