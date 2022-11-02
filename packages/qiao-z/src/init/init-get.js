/**
 * init get
 * @param {*} app 
 * @param {*} routers 
 * @returns 
 */
export default (app, routers) => {
    //check
    if (!app || !routers) return;

    // init
    app.get = (path, callback) => {
        routers.get = routers.get || [];
        routers.get.push({
            path: path,
            callback: callback
        });
    };
};