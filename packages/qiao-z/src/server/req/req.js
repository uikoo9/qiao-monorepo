// parseurl
import parseurl from 'parseurl';

// headers
import handleHeaders from './req-headers.js';

// useragent
import handleUseragent from './useragent/index.js';

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
    req.useragent = handleUseragent(req);
    req.body = await handleBody(req);

    return req;
};