'use strict';

var path = require('path');
var qiaoFile = require('qiao-file');
var http = require('http');
var parseurl = require('parseurl');
var cookie = require('cookie');
var ua = require('qiao-ua');
var qs = require('qs');
var getRawBody = require('raw-body');
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
        }
    
        // json
        if(contentType == 'application/json'){
            body = JSON.parse(bodyString);
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
var resFn = (response, cros) => {
    const res = {};
    res.response = response;
    res.cros = cros;
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
            // opt
            let opt = v.options;

            // cros
            if(that.cros && v.status == 200) opt = Object.assign({}, that.cros, v.options);

            // head
            that.response.writeHead(v.status, opt);
        });

        // delete
        delete this.cros;
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

/**
 * handle cros
 * @param {*} res 
 * @param {*} cros 
 * @returns 
 */
const handleCros = (res, cros) => {
    if (!cros) return;

    res.head(200, cros);
};

/**
 * handle options
 * @param {*} req 
 * @param {*} res 
 */
const handleOptions = (req, res) => {
    // check
    const reqMethod = req.request.method.toLowerCase();
    if (reqMethod != 'options') return;

    // return
    res.end('');
    return true;
};

/**
 * handle routers
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handleRouters = (routers, req, res) => {
    // check
    const reqMethod = req.request.method.toLowerCase();
    const reqRouters = routers[reqMethod];
    if (reqRouters && reqRouters.length) return;

    // return
    res.send('no routers');
    return true;
};

/**
 * handle params router
 * @param {*} router 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handleParamsRouter = (router, req, res) => {
    // check :
    if (router.path.indexOf(':') == -1) return;

    // check start
    const f = router.path.split(':')[0];
    if (req.url.pathname.indexOf(f) !== 0) return;

    // params
    const param = router.path.substring(f.length + 1);
    req.params = {};
    req.params[param] = req.url.pathname.substring(f.length);

    // callback
    router.callback(req, res);
    return true;
};

// handle params router

/**
 * handle static
 * @param {*} routers 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handleStatic = (routers, req, res) => {
    let check;
    for (let i = 0; i < routers.length; i++) {
        const router = routers[i];

        // check static
        if (!router.static) continue;

        // params
        const paramsRouterRes = handleParamsRouter(router, req, res);
        if (!paramsRouterRes) continue;

        // return 
        check = true;
        break;
    }

    return check;
};

/**
 * handle all
 * @param {*} routers 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handleAll = (routers, req, res) => {
    let check;
    for (let i = 0; i < routers.length; i++) {
        const router = routers[i];
        if (router.path != '/*') continue;

        router.callback(req, res);
        check = true;
        break;
    }

    return check;
};

/**
 * handle checks
 * @param {*} routers 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handleChecks = (app, req, res) => {
    if(!app || !app._checks || !app._checks.length) return;
    
    let checkRes;
    for (let i = 0; i < app._checks.length; i++) {
        const check = app._checks[i];
        if (check(req, res)) continue;

        checkRes = true;
        break;
    }

    return checkRes;
};

/**
 * handle path
 * @param {*} routers 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handlePath = (routers, req, res) => {
    let check;
    for (let i = 0; i < routers.length; i++) {
        const router = routers[i];
        if (router.path != req.url.pathname) continue;

        router.callback(req, res);
        check = true;
        break;
    }

    return check;
};

// handle params router

/**
 * handle params
 * @param {*} routers 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handleParams = (routers, req, res) => {
    let check;
    for (let i = 0; i < routers.length; i++) {
        const router = routers[i];

        // params
        const paramsRouterRes = handleParamsRouter(router, req, res);
        if(!paramsRouterRes) continue;

        // return 
        check = true;
        break;
    }

    return check;
};

// req

/**
 * listen request
 * @param {*} request 
 * @param {*} response 
 * @param {*} routers 
 * @param {*} app 
 * @returns 
 */
const listenRequest = async (request, response, routers, app) => {
    // req res
    const req = await reqFn(request);
    const res = resFn(response, app._cros);

    // handle cros
    handleCros(res, app._cros);

    // handle options
    const optionsRes = handleOptions(req, res);
    if (optionsRes) return;

    // handle routers
    const routersRes = handleRouters(routers, req, res);
    if (routersRes) return;

    // routers
    const reqMethod = req.request.method.toLowerCase();
    const reqRouters = routers[reqMethod];

    // handle static
    const staticRes = handleStatic(reqRouters, req, res);
    if (staticRes) return;

    // handle all
    const allRes = handleAll(reqRouters, req, res);
    if (allRes) return;

    // handle checks
    const checkRes = handleChecks(app, req, res);
    if (checkRes) return;

    // handle path
    const pathRes = handlePath(reqRouters, req, res);
    if (pathRes) return;

    // handle params
    const paramsRes = handleParams(reqRouters, req, res);
    if (paramsRes) return;

    // other
    res.send('can not get router');
    return;
};

// http

/**
 * listen
 * @param {*} port 
 * @param {*} routers 
 * @param {*} app 
 * @returns 
 */
const listen = (port, routers, app) => {
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
        listenRequest(request, response, routers, app);
    });

    // listen
    server.listen(port);
};

// init

// routers
const routers = {};

// cros options
const crosOptions = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
};

/**
 * app
 */
var app = () => {
    const app = {};

    // init
    app.init = init;

    // methods
    initMethods(app, routers);

    // static
    initStatic(app, routers);

    // controller
    initController(app);

    // listen
    app.listen = (port) => {
        listen(port || '5277', routers, app);
    };

    return app;
};

// init app
function init(options) {
    if (!options) return;

    // cros
    if (options.cros) {
        this._cros = options.cros === true ? crosOptions : (options.cros || {});
    }

    // checks
    if (options.checks) {
        this._checks = options.checks;
    }

    // modules
    if (options.modules && options.config) {
        const that = this;
        options.modules.forEach(m => {
            m(that, options.config);
        });
    }
}

module.exports = app;
