// cookie
import cookie from 'cookie';

/**
 * res.clearCookie
 * @param {*} res 
 * @param {*} name 
 */
const clearCookie = (res, name) => {
    // check
    if (!res || !name) return;

    // clear cookies
    const str = cookie.serialize(name, '', { expires: new Date(1), path: '/' });
    res.clearCookies = res.clearCookies || [];
    res.clearCookies.push(str);
};

export default clearCookie;