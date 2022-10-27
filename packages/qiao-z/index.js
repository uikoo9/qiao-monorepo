'use strict';

var path = require('path');
var http = require('http');
var parseurl = require('parseurl');
var qiaoFile = require('qiao-file');
var template = require('art-template');

// methods
const methods = ['get'];

/**
 * init methods
 * @param {*} app 
 * @param {*} routers 
 * @returns 
 */
var initMethods = (app, routers) => {
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

// path

/**
 * init static
 */
var initStatic = (app, routers) => {
    // check
    if (!app || !routers) return;

    // static
    app.static = (router, filePath) => {
        // router and callback
        const mpath = `${router}/:opath`;
        const callback = (req, res) => {
            const opath = req.params.opath;
            const rpath = `${filePath}/${opath}`;
            const fpath = path.resolve(process.cwd(), rpath);

            res.render(fpath);
        };

        // get
        routers.get = routers.get || [];
        routers.get.push({
            path: mpath,
            callback: callback,
            static: true
        });
    };

    // acme
    app.static('/.well-known', './.well-known');
};

// parseurl

/**
 * req
 * @param {*} request 
 * @returns 
 */
var reqFn = (request) => {
    const req = {};
    req.request = request;
    req.url = parseurl(request);
    req.headers = handleHeaders(request);

    return req;
};

// handle headers
function handleHeaders(request) {
    const headers = {};

    // check
    const rawHeaders = request.rawHeaders;
    if (!rawHeaders || !rawHeaders.length) return headers;

    // handle
    rawHeaders.forEach((h, i) => {
        if (i % 2 == 0) headers[h.toLowerCase()] = rawHeaders[i + 1];
    });
    return headers;
}

/**
 * error
 * @param {*} res 
 * @param {*} msg 
 */
const error = (res, msg) => {
    // check
    if (!res || !msg) return;

    // res
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(msg);
};

// path

/**
 * res
 */
var resFn = (response) => {
    const res = {};
    res.response = response;
    res.redirect = redirect;
    res.render = render;

    return res;
};

/**
 * redirect
 * @param {*} url 
 */
function redirect(url) {
    this.response.writeHead(302, {
        'Location': url
    });
    this.response.end();
}

/**
 * render
 * @param {*} filePath 
 * @param {*} data 
 * @returns 
 */
function render(filePath, data) {
    // check
    if (!filePath) {
        error(this.response, 'render: please check file path!');
        return;
    }

    // final path
    const finalPath = path.resolve(process.cwd(), filePath);
    if (!qiaoFile.isExists(filePath)) {
        error(this.response, 'render: file path is not exists');
        return;
    }

    // file
    let file;
    let contentType;
    if(qiaoFile.extname(finalPath) == '.html'){
        file = template(finalPath, data || {});
        contentType = 'text/html';
    }else {
        file = qiaoFile.readFile(finalPath);
        contentType = 'text/plain';
    }
    if (!file) {
        error(this.response, 'render: read file error');
        return;
    }

    this.response.writeHeader(200, { 'Content-Type': contentType });
    this.response.write(file);
    this.response.end();
}

// req

/**
 * listen request
 * @param {*} request 
 * @param {*} response 
 * @param {*} routers 
 * @returns 
 */
var listenRequest = (request, response, routers) => {
    if (Object.keys(routers).length === 0) {
        error(response, 'no routers');
        return;
    }

    // req res
    const req = reqFn(request);
    const res = resFn(response);

    // req method
    const reqMethod = req.request.method.toLowerCase();
    const reqRouters = routers[reqMethod];
    if (!reqRouters || !reqRouters.length) {
        error(response, 'no routers');
        return;
    }

    // check static
    if (checkStatic(reqRouters, req, res)) return;

    // check *
    if (checkAll(reqRouters, req, res)) return;

    // check path
    if (checkPath(reqRouters, req, res)) return;

    // check other
    let check;
    for (let i = 0; i < reqRouters.length; i++) {
        const r = handleRequest(reqRouters[i], req, res);
        if (r) {
            check = true;
            break;
        }
    }
    if (!check) {
        error(response, 'can not get router');
        return;
    }
};

// check static
function checkStatic(routers, req, res) {
    let routerStatic;
    for (let i = 0; i < routers.length; i++) {
        if (routers[i].static) {
            routerStatic = handleRequest(routers[i], req, res);
        }
    }

    return routerStatic;
}

// check all
function checkAll(routers, req, res) {
    let routerAll;
    for (let i = 0; i < routers.length; i++) {
        if (routers[i].path == '/*') {
            routerAll = routers[i];
            routerAll.callback(req, res);
            break;
        }
    }

    return routerAll;
}

// check path
function checkPath(routers, req, res) {
    let routerPath;
    for (let i = 0; i < routers.length; i++) {
        if (routers[i].path == req.url.pathname) {
            routerPath = routers[i];
            routerPath.callback(req, res);
        }
    }

    return routerPath;
}

// handle get request
function handleRequest(r, req, res) {
    // check path /:params
    if (r.path.indexOf(':') > -1) {
        const f = r.path.split(':')[0];
        if (req.url.pathname.indexOf(f) === 0) {
            const param = r.path.substring(f.length + 1);
            req.params = {};
            req.params[param] = req.url.pathname.substring(f.length);

            r.callback(req, res);
            return true;
        }
    }

    // return
    return false;
}

// http

/**
 * listen
 * @param {*} port 
 * @param {*} routers 
 * @returns 
 */
var listen = (port, routers) => {
    if(!port || !routers) return;

    // server
    const server = http.createServer();

    // on
    server.on('checkContinue', () => {
        console.log('checkContinue');
    });
    server.on('checkExpectation', () => {
        console.log('checkExpectation');
    });
    server.on('clientError', (err) => {
        console.log('clientError', err);
    });
    server.on('close', () => {
        console.log('close');
    });
    server.on('connect', () => {
        console.log('connect');
    });
    server.on('dropRequest', () => {
        console.log('dropRequest');
    });
    server.on('upgrade', () => {
        console.log('upgrade');
    });

    // request
    server.on('request', (request, response) => {
        listenRequest(request, response, routers);
    });

    // listen
    server.listen(port);

    // return
    return server;
};

// listen

// port
const defaultPort = '5277';

/**
 * init listen
 * @param {*} app 
 * @param {*} routers 
 * @returns 
 */
var initListen = (app, routers) => {
    // check
    if (!app || !routers) return;

    // init
    app.listen = (port) => {
        port = port || defaultPort;

        listen(port, routers);
    };
};

// qiao

/**
 * init controller
 */
var initController = (app) => {
    // check
    if (!app) return;

    // files
    const serverFiles = qiaoFile.lsdir(process.cwd() + '/');
    if (!serverFiles || !serverFiles.files || !serverFiles.files.length) return;

    // init
    serverFiles.files.forEach((serverFile) => {
        const file = serverFile.path + serverFile.name;

        if (/Controller\.js$/.test(file)) require(file)(app);
    });
};

// routers
const routers = {};

/**
 * app
 */
var index = () => {
    let app = {};
    initMethods(app, routers);
    initStatic(app, routers);
    initListen(app, routers);
    initController(app);

    return app;
};

module.exports = index;
