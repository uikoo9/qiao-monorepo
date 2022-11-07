/**
 * handle checks
 * @param {*} routers 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handleChecks = async (app, req, res) => {
    // check
    if (!app || !app._checks || !app._checks.length) return;

    // check
    let r;
    for (let i = 0; i < app._checks.length; i++) {
        const check = app._checks[i];
        const checkRes = await check(req, res);
        if (checkRes) continue;

        r = true;
        break;
    }

    // return
    return r;
};

export default handleChecks;