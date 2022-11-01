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

export default handlePath;