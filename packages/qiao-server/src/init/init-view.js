// path
import path from 'path';

// art template
import artTemplate from 'art-template';
import expressArtTemplate from 'express-art-template';

/**
 * init view
 * @param {*} app 
 */
export default (app) => {
    // view path
    const viewPath = path.resolve(process.cwd(), './views');

    // set
    artTemplate.defaults.cache = false;
    artTemplate.defaults.extname = '.html';
    app.set('view engine', 'html');
    app.set('views', viewPath);
    app.engine('html', expressArtTemplate);
};