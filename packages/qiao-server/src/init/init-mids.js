// mids
import {
    auth as qauth,
    crossDomain,
} from './_mids.js';

/**
 * init mids
 * @param {*} app 
 * @param {*} options 
 * @returns 
 */
export default (app, options) => {
    // cross domain
    app.use(crossDomain);

    // auth
    if(options.checkAuth){
        app.use(qauth);
    }

    // mids
    if(options.mids){
        options.mids.forEach((mid) => {
            app.use(mid);
        });
    }
};