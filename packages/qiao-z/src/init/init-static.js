// path
import { resolve } from 'path';

/**
 * init static
 */
export default (app, routers) => {
    // check
    if (!app || !routers) return;

    // static
    app.static = (router, filePath) => {
        // router and callback
        const mpath = `${router}/:opath`;
        const callback = (req, res) => {
            const opath = req.params.opath;
            const rpath = `${filePath}/${opath}`;
            const fpath = resolve(process.cwd(), rpath);

            res.render(fpath);
        };

        // get
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