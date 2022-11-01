/**
 * handle cros
 * @param {*} res 
 * @param {*} cros 
 * @returns 
 */
const handleCros = (res, cros) => {
    if (!cros) return;

    res.head(200, cros);
};

export default handleCros;