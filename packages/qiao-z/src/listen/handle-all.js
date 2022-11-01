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

export default handleAll;