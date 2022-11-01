/**
 * handle checks
 * @param {*} routers 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handleChecks = (app, req, res) => {
    let checkRes;
    for (let i = 0; i < app._checks.length; i++) {
        const check = app._checks[i];
        if (check(req, res)) continue;

        checkRes = true;
        break;
    }

    return checkRes;
};

export default handleChecks;