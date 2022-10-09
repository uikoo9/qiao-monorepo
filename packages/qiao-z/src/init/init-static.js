/**
 * init static
 */
module.exports = function (app) {
    app.static = function (path, filePath) {
        app.get(`${path}/:opath`, function (req, res) {
            const opath = req.params.opath;
            const rpath = `${filePath}/${opath}`;
            const fpath = require('path').resolve(process.cwd(), rpath);

            res.render(fpath);
        });
    };
};