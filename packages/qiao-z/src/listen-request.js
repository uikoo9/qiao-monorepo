// out
const out = require('./out.js');

/**
 * listen request
 * @param {*} request 
 * @param {*} response 
 * @param {*} routers 
 * @returns 
 */
module.exports = function (request, response, routers) {
    if (Object.keys(routers).length === 0) {
        out.error(response, 'no routers');
        return;
    }

    // req res
    const req = require('./req.js')(request);
    const res = require('./res.js')(response);

    // req method
    const reqMethod = req.request.method.toLowerCase();
    const reqRouters = routers[reqMethod];
    if (!reqRouters || !reqRouters.length) {
        out.error(response, 'no routers');
        return;
    }

    // check *
    if (checkAll(reqRouters, req, res)) return;

    // check path
    if (checkPath(reqRouters, req, res)) return;

    // check other
    let check;
    for (let i = 0; i < reqRouters.length; i++) {
        const r = handleRequest(reqRouters[i], req, res);
        if (r){
            check = true;
            break;
        }
    }
    if (!check) {
        out.error(response, 'can not get router');
        return;
    }
};

// check all
function checkAll(routers, req, res) {
    let routerAll;
    for (let i = 0; i < routers.length; i++) {
        // check *
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
        // check path
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