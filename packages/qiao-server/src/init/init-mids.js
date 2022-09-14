// mids
import { checkPath, crossDomain } from './_mids.js';

/**
 * init mids
 * @param {*} app 
 * @param {*} options 
 * @returns 
 */
export default (app, options) => {
    // cross domain
    app.use(crossDomain);

    // check path
    app.use(checkPath);

    // mids
    if(options.mids){
        options.mids.forEach((mid) => {
            app.use(mid);
        });
    }
};