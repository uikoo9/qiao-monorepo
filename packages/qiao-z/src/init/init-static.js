// path
const path = require('path');

/**
 * init static
 */
module.exports = function (app) {
    app.static = function (router, filePath) {
        app.get(`${router}/:opath`, function (req, res) {
            const opath = req.params.opath;
            const rpath = `${filePath}/${opath}`;
            const fpath = path.resolve(process.cwd(), rpath);

            res.render(fpath);
        });
    };

    // acme
    app.static('/.well-known', './.well-known');
};