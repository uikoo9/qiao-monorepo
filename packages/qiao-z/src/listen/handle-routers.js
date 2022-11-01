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

export default handleRouters;