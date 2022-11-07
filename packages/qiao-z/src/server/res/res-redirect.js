
/**
 * res.redirect
 * @param {*} res 
 * @param {*} url 
 * @returns 
 */
const redirect = (res, url) => {
    // check
    if (!res || !url) return;

    // redirect
    res.head(302, { 'Location': url });
    res.end();
};

export default redirect;