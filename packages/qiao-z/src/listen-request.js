// out
const out = require('./out.js');

/**
 * listen request
 * @param {*} routers 
 * @param {*} request 
 * @param {*} response 
 * @returns 
 */
module.exports = function (routers, request, response) {
    if (!routers || !routers.length) {
        out.error(response, 'can not get router');
        return;
    }

    // handle req
    const req = require('./req.js')(request);

    // handle res
    const res = require('./res.js')(response);

    // check *
    if (checkAll(routers, req, res)) return;

    // check path
    if (checkPath(routers, req, res)) return;

    // check other
    let check;
    for (let i = 0; i < routers.length; i++) {
        const r = handleRequest(routers[i], req, res);
        if (r) check = true;
    }

    // res
    if (!check) {
        out.error(response, 'can not get router');
        return;
    }
};

// check all
function checkAll(routers, req, res) {
    let routerAll;
    for (let i = 0; i < routers.length; i++) {
        // check method
        if (routers[i].method.toUpperCase() != req.request.method) continue;

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
        // check method
        if (routers[i].method.toUpperCase() != req.request.method) continue;

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
    // check method
    if (r.method.toUpperCase() != req.request.method) return;

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