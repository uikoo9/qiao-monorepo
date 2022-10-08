// listen
const listen = require('./src/listen.js');

// methods
const methods = ['get'];

// routers
const routers = [];

/**
 * app
 */
module.exports = function () {
    let app = {};
    app = initListen(app);
    app = initMethods(app);

    return app;
};

// init listen
function initListen(app) {
    app.listen = function(port){
        this.server = listen(port, routers);
    };

    return app;
}

// init method
function initMethods(app){
    methods.forEach(function(v){
        app[v] = function(path, callback){
            routers.push({
                method: v,
                path: path,
                callback: callback
            });
        };
    });

    return app;
}