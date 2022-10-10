// path
const path = require('path');

/**
 * init static
 */
module.exports = function (app, routers) {
    app.static = function (router, filePath) {
        const mpath = `${router}/:opath`;
        const callback = function (req, res) {
            const opath = req.params.opath;
            const rpath = `${filePath}/${opath}`;
            const fpath = path.resolve(process.cwd(), rpath);

            res.render(fpath);
        };

        routers.get = routers.get || [];
        routers.get.push({
            path: mpath,
            callback: callback,
            static: true
        });
    };

    // acme
    app.static('/.well-known', './.well-known');
};