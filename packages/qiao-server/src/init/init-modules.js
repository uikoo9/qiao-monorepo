// require
import { user as quser } from '../_qiao.js';

/**
 * init modules
 * @param {*} app 
 * @param {*} options 
 */
export default (app, options) => {
    // qiao-server-user
    quser.init(app);

    // others
    if(options.modules){
        options.modules.forEach((m) => {
            m.init(app);
        });
    }
};