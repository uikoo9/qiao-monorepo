/**
 * handle checks
 * @param {*} routers 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handleChecks = async (app, req, res) => {
    if(!app || !app._checks || !app._checks.length) return;
    
    let r;
    for (let i = 0; i < app._checks.length; i++) {
        const check = app._checks[i];
        const checkRes = await check(req, res);
        if (checkRes) continue;

        r = true;
        break;
    }

    return r;
};

export default handleChecks;