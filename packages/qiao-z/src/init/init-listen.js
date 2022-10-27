// listen
import listen from '../server/listen.js';

// port
const defaultPort = '5277';

/**
 * init listen
 * @param {*} app 
 * @param {*} routers 
 * @returns 
 */
export default (app, routers) => {
    // check
    if (!app || !routers) return;

    // init
    app.listen = (port) => {
        port = port || defaultPort;

        listen(port, routers);
    };
};