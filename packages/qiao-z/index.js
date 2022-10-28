'use strict';

var path = require('path');
var http = require('http');
var parseurl = require('parseurl');
var cookie = require('cookie');
var ua = require('qiao-ua');
var qs = require('qs');
var getRawBody = require('raw-body');
var qiaoFile = require('qiao-file');
var template = require('art-template');

// methods
const methods = ['get', 'post'];

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

/**
 * handle headers
 * @param {*} request 
 * @returns 
 */
var handleHeaders = (request) => {
    const headers = {};

    // check
    const rawHeaders = request.rawHeaders;
    if (!rawHeaders || !rawHeaders.length) return headers;

    // handle
    rawHeaders.forEach((h, i) => {
        if (i % 2 == 0) headers[h.toLowerCase()] = rawHeaders[i + 1];
    });
    return headers;
};

// cookie

// default cookie
const defaultCookies = {};

/**
 * handle cookies
 * @param {*} req 
 * @returns 
 */
var handleCookies = (req) => {
    // check
    if (!req || !req.headers || !req.headers['cookie']) return defaultCookies;

    // return
    return cookie.parse(req.headers['cookie']);
};

// ua

/**
 * handle useragent
 * @param {*} req 
 * @returns 
 */
var handleUseragent = (req) => {
    return (!req || !req.headers || !req.headers['user-agent']) ? {} : ua(req.headers['user-agent']);
};

// qs

/**
 * handle query
 * @param {*} req 
 * @returns 
 */
var handleQuery = (req) => {
    return (!req || !req.url || !req.url.query) ? {} : qs.parse(req.url.query);
};

// raw body

// default body
const defaultBody = {};

/**
 * handle body
 * @param {*} req 
 * @returns 
 */
var handleBody = async (req) => {
    // check
    if(!req || !req.headers || !req.headers['content-type']) return defaultBody;

    // body string
    const bodyString = await getBodyString(req);
    if(!bodyString) return defaultBody;

    // body
    let body;
    try {
        // content type
        const contentType = req.headers['content-type'];

        // xfrom
        if(contentType == 'application/x-www-form-urlencoded'){
            body = qs.parse(bodyString);
            console.log(contentType, body);
        }
    
        // json
        if(contentType == 'application/json'){
            body = JSON.parse(bodyString);
            console.log(contentType, body);
        }
    } catch (error) {
        console.log(error);
    }

    // return
    return body || defaultBody;
};

// get body string
async function getBodyString(req){
    try {
        // options
        const options = {
            length: req.headers['content-length'],
            limit: '1mb',
            encoding: true
        };

        // body str
        return await getRawBody(req.request, options);
    } catch (e) {
        console.log(e);
        return null;
    }
}

// parseurl

/**
 * req
 * @param {*} request 
 * @returns 
 */
var reqFn = async (request) => {
    const req = {};
    req.request = request;
    req.url = parseurl(request);
    req.headers = handleHeaders(request);
    req.cookies = handleCookies(req);
    req.useragent = handleUseragent(req);
    req.query = handleQuery(req);
    req.body = await handleBody(req);

    return req;
};

// cookie

/**
 * res
 */
var resFn = (response) => {
    const res = {};
    res.response = response;
    res.head = head;
    res.end = end;
    res.redirect = redirect;
    res.send = send;
    res.json = json;
    res.jsonSuccess = jsonSuccess;
    res.jsonFail = jsonFail;
    res.clearCookie = clearCookie;
    res.render = render;

    return res;
};

// head
function head(status, options){
    this.heads = this.heads || [];
    this.heads.push({
        status: status,
        options: options
    });
}

// end
function end(msg){
    // clear cookies
    if(this.clearCookies && this.clearCookies.length){
        this.response.setHeader('Set-Cookie', this.clearCookies);
        delete this.clearCookies;
    }

    // heads
    if(this.heads && this.heads.length){
        const that = this;
        this.heads.forEach((v) => {
            that.response.writeHead(v.status, v.options);
        });

        delete this.heads;
    }

    // delete
    delete this.head;
    delete this.end;

    // end
    this.response.end(msg);
}

// redirect
function redirect(url) {
    // check
    if (!url) return;

    // redirect
    this.head(302, { 'Location': url });
    this.end();
}

// send
function send(msg) {
    if (!msg) return;

    this.head(200, { 'Content-Type': 'text/plain' });
    this.end(msg);
}

// json
function json(obj) {
    // check
    if (!obj) return;

    try {
        const msg = JSON.stringify(obj);
        this.head(200, { 'Content-Type': 'application/json' });
        this.end(msg);
    } catch (error) {
        console.log(error);
        this.send('res.json obj error');
    }
}

// json success
function jsonSuccess(msg, obj) {
    // check
    if (!msg) return;

    // json
    const jsonObj = {
        type: true,
        msg: msg,
    };

    // obj
    if (obj) jsonObj.obj = obj;

    // send
    this.json(jsonObj);
}

// json fail
function jsonFail(msg, obj) {
    // check
    if (!msg) return;

    // json
    const jsonObj = {
        type: false,
        msg: msg,
    };

    // obj
    if (obj) jsonObj.obj = obj;

    // send
    this.json(jsonObj);
}

// clear cookie
function clearCookie(name){
    const str = cookie.serialize(name, '', { expires: new Date(1), path: '/' });
    this.clearCookies = this.clearCookies || [];
    this.clearCookies.push(str);
}

// render
function render(filePath, data){
    // check
    if (!filePath) {
        this.send('render: please check file path!');
        return;
    }

    // final path
    const finalPath = path.resolve(process.cwd(), filePath);
    if (!qiaoFile.isExists(filePath)) {
        this.send('render: file path is not exists');
        return;
    }

    // file
    let file;
    let contentType;
    if (qiaoFile.extname(finalPath) == '.html') {
        file = template(finalPath, data || {});
        contentType = 'text/html';
    } else {
        file = qiaoFile.readFile(finalPath);
        contentType = 'text/plain';
    }
    if (!file) {
        this.send('render: read file error');
        return;
    }

    this.response.writeHeader(200, { 'Content-Type': contentType });
    this.response.write(file);
    this.end();
}

// req

/**
 * listen request
 * @param {*} request 
 * @param {*} response 
 * @param {*} routers 
 * @returns 
 */
var listenRequest = async (request, response, routers) => {
    // req res
    const req = await reqFn(request);
    const res = resFn(response);
    
    // check routers
    if (Object.keys(routers).length === 0) {
        res.send('no routers');
        return;
    }

    // req method
    const reqMethod = req.request.method.toLowerCase();
    const reqRouters = routers[reqMethod];
    if (!reqRouters || !reqRouters.length) {
        res.send('no routers');
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
        res.send('can not get router');
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
    if (!routers) return;

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
