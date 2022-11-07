// cookie
import cookie from 'cookie';

// default cookie
const defaultCookies = {};

/**
 * handle cookies
 * @param {*} req 
 * @returns 
 */
const handleCookies = (req) => {
    // check
    if (!req || !req.headers || !req.headers['cookie']) return defaultCookies;

    // return
    return cookie.parse(req.headers['cookie']);
};

export default handleCookies;