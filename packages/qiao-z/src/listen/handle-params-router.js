/**
 * handle params router
 * @param {*} router 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handleParamsRouter = (router, req, res) => {
    // check :
    if (router.path.indexOf(':') == -1) return;

    // check start
    const f = router.path.split(':')[0];
    if (req.url.pathname.indexOf(f) !== 0) return;

    // params
    const param = router.path.substring(f.length + 1);
    req.params = {};
    req.params[param] = req.url.pathname.substring(f.length);

    // callback
    router.callback(req, res);
    return true;
};

export default handleParamsRouter;