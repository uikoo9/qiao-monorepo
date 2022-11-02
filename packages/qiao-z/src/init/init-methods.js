// methods
const methods = ['get', 'post'];

/**
 * init methods
 * @param {*} app 
 * @param {*} routers 
 * @returns 
 */
export default (app, routers) => {
    //check
    if (!app || !routers) return;

    // init
    methods.forEach((v) => {
        app[v] = (path, callback) => {
            routers[v] = routers[v] || [];
            routers[v].push({
                path: path,
                callback: callback
            });
        };
    });
};