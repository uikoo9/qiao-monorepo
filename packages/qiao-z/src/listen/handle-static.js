// handle params router
import handleParamsRouter from './handle-params-router.js';

/**
 * handle static
 * @param {*} routers 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handleStatic = (routers, req, res) => {
    // check
    if (!routers || !routers.length || !req || !res) return;

    // check
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

    // return
    return check;
};

export default handleStatic;