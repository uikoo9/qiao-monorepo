// parseurl
import parseurl from 'parseurl';

// useragent
import useragent from './useragent/index.js';

/**
 * req
 * @param {*} request 
 * @returns 
 */
export default (request) => {
    const req = {};
    req.request = request;
    req.url = parseurl(request);
    req.headers = handleHeaders(request);
    req.useragent = useragent(req);

    return req;
};

// handle headers
function handleHeaders(request) {
    const headers = {};

    // check
    const rawHeaders = request.rawHeaders;
    if (!rawHeaders || !rawHeaders.length) return headers;

    // handle
    rawHeaders.forEach((h, i) => {
        if (i % 2 == 0) headers[h.toLowerCase()] = rawHeaders[i + 1];
    });
    return headers;
}