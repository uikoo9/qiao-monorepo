// handle params router
import handleParamsRouter from './handle-params-router.js';

/**
 * handle params
 * @param {*} routers 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handleParams = (routers, req, res) => {
    // check
    if (!routers || !routers.length || !req || !res) return;

    let check;
    for (let i = 0; i < routers.length; i++) {
        const router = routers[i];

        // params
        const paramsRouterRes = handleParamsRouter(router, req, res);
        if (!paramsRouterRes) continue;

        // return 
        check = true;
        break;
    }

    return check;
};

export default handleParams;