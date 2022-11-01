/**
 * init check
 */
export default (app) => {
    // check
    if (!app) return;

    // app.check
    app.check = (checks) => {
        app._checks = checks;
    };
};