// req
import reqFn from './req/req.js';

// res
import resFn from './res.js';

/**
 * listen request
 * @param {*} request 
 * @param {*} response 
 * @param {*} routers 
 * @returns 
 */
export default async (request, response, routers, cros) => {
    // req res
    const req = await reqFn(request);
    const res = resFn(response, cros);

    // check routers
    if (Object.keys(routers).length === 0) {
        res.send('no routers');
        return;
    }

    // init cros
    if(cros){
        res.head(200, cros);
    }
    
    // req method
    const reqMethod = req.request.method.toLowerCase();
    if(reqMethod == 'options'){
        res.end('');
        return;
    }

    // check router 
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