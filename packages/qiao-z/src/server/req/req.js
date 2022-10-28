// parseurl
import parseurl from 'parseurl';

// headers
import handleHeaders from './req-headers.js';

// cookies
import handleCookies from './req-cookies.js';

// useragent
import handleUseragent from './useragent/index.js';

// query
import handleQuery from './req-query.js';

// body
import handleBody from './req-body.js';

/**
 * req
 * @param {*} request 
 * @returns 
 */
export default async (request) => {
    const req = {};
    req.request = request;
    req.url = parseurl(request);
    req.headers = handleHeaders(request);
    req.cookies = handleCookies(req);
    req.useragent = handleUseragent(req);
    req.query = handleQuery(req);
    req.body = await handleBody(req);

    return req;
};