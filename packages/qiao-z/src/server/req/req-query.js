// qs
import qs from 'qs';

/**
 * handle query
 * @param {*} req 
 * @returns 
 */
const handleQuery = (req) => {
    return (!req || !req.url || !req.url.query) ? {} : qs.parse(req.url.query);
};

export default handleQuery;