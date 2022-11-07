/**
 * handle headers
 * @param {*} request 
 * @returns 
 */
const handleHeaders = (request) => {
    const headers = {};

    // check
    const rawHeaders = request.rawHeaders;
    if (!rawHeaders || !rawHeaders.length) return headers;

    // handle
    rawHeaders.forEach((h, i) => {
        if (i % 2 == 0) headers[h.toLowerCase()] = rawHeaders[i + 1];
    });
    return headers;
};

export default handleHeaders;