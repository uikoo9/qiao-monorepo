// cookie
import cookie from 'cookie';

// default cookie
const defaultCookies = {};

/**
 * handle cookies
 * @param {*} req 
 * @returns 
 */
export default (req) => {
    // check
    if (!req || !req.headers || !req.headers['cookie']) return defaultCookies;

    // return
    return cookie.parse(req.headers['cookie']);
};