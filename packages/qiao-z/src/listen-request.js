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
    if (!routers || !routers.length) return;

    // handle req
    const req = require('./req.js')(request);

    // handle res
    const res = require('./res.js')(response);

    // check *
    let routerAll;
    for (let i = 0; i < routers.length; i++) {
        if (routers[i].path == '/*') routerAll = routers[i];
    }
    if (routerAll) {
        routerAll.callback(req, res);
        return;
    }

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

    // check normal
    if (r.path != req.url.pathname) return;


    // callback
    r.callback(req, res);
    return true;
}