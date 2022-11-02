// parseurl
import parseurl from 'parseurl';

// headers
import handleHeaders from './req-headers.js';

// cookies
import handleCookies from './req-cookies.js';

// useragent
import handleUseragent from './req-useragent.js';

// query
import handleQuery from './req-query.js';

// body
import handleBody from './req-body.js';

/**
 * req
 * @param {*} request 
 * @returns 
 */
export default async (request, upload) => {
    const req = {};
    req.request = request;
    req.url = parseurl(request);
    req.headers = handleHeaders(request);
    req.cookies = handleCookies(req);
    req.useragent = handleUseragent(req);
    req.query = handleQuery(req);

    // body or upload
    if(!upload){
        req.body = await handleBody(req);
    }else{
        req.upload = await upload.uploadSync(request);
    }

    return req;
};