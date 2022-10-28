// ua
import ua from 'qiao-ua';

/**
 * handle useragent
 * @param {*} req 
 * @returns 
 */
export default (req) => {
    return (!req || !req.headers || !req.headers['user-agent']) ? {} : ua(req.headers['user-agent']);
};