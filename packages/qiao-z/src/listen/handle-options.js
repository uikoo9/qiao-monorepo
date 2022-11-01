/**
 * handle options
 * @param {*} req 
 * @param {*} res 
 */
const handleOptions = (req, res) => {
    // check
    const reqMethod = req.request.method.toLowerCase();
    if (reqMethod != 'options') return;

    // return
    res.end('');
    return true;
};

export default handleOptions;