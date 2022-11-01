/**
 * init cros
 */
export default (app) => {
    // check
    if (!app) return;

    // default options
    const defaultOptions = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
    };

    // cros
    app.cros = (opt) => {
        app._cros = opt === true ? defaultOptions : (opt || {});
    };
};