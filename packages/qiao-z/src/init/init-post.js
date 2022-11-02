// body
import handleBody from '../server/req/req-body.js';

/**
 * init post
 * @param {*} app 
 * @param {*} routers 
 * @returns 
 */
export default (app, routers) => {
    //check
    if (!app || !routers) return;

    // init
    app.post = (path, callback) => {
        // callback
        const finalCallback = async (req, res) => {
            req.body = await handleBody(req);

            callback(req, res);
        };

        // post
        routers.post = routers.post || [];
        routers.post.push({
            path: path,
            callback: finalCallback
        });
    };
};