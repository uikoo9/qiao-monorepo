/**
 * init modules
 */
export default (app) => {
    // check
    if (!app) return;

    app.modules = (config, modules) => {
        // check
        if (!config) return;
        if (!modules || !modules.length) return;

        // init
        modules.forEach(m => {
            m.init(app, config);
        });
    };
};