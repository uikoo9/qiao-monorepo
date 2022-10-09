// methods
const methods = ['get'];

/**
 * init methods
 * @param {*} app 
 * @param {*} routers 
 * @returns 
 */
module.exports = function (app, routers) {
    methods.forEach(function(v){
        app[v] = function (path, callback) {
            routers[v] = routers[v] || [];
            routers[v].push({
                path: path,
                callback: callback
            });
        };
    });
};