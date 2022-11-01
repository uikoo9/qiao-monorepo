// req
import reqFn from '../server/req/req.js';

// res
import resFn from '../server/res.js';

// handle
import handleCros from './handle-cros.js';
import handleOptions from './handle-options.js';
import handleRouters from './handle-routers.js';
import handleStatic from './handle-static.js';
import handleAll from './handle-all.js';
import handlePath from './handle-path.js';
import handleParams from './handle-params.js';

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

    let checkRes;
    for (let i = 0; i < app._checks.length; i++) {
        const check = app._checks[i];
        if (check(req, res)) continue;

        checkRes = true;
        break;
    }
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

export default listenRequest;