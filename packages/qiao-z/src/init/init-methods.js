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
            routers.push({
                method: v,
                path: path,
                callback: callback
            });
        };
    });
};