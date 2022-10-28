// qs
import qs from 'qs';

/**
 * handle query
 * @param {*} req 
 * @returns 
 */
export default (req) => {
    return (!req || !req.url || !req.url.query) ? {} : qs.parse(req.url.query);
};