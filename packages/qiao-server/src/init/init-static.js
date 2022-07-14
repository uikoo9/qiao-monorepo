// path
import path from 'path';

// express
import express from 'express';

/**
 * init static
 * @param {*} app
 * @param {*} options
 */
export default (app, options) => {
    // acme
    const acmePath = path.resolve(process.cwd(), './.well-known');
    app.use('/.well-known', express.static(acmePath, { maxAge: 0 }));

    // static
    if(options.isDev){
        const staticPath = path.resolve(process.cwd(), './web/static');
        app.use('/static', express.static(staticPath, { maxAge: 0 }));
    }

    // options
    if (options.staticPaths) {
        options.staticPaths.forEach((spath) => {
            app.use(spath.name, express.static(spath.path, { maxAge: 0 }));
        });
    }
};
