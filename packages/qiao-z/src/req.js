// parseurl
const parseurl = require('parseurl');

/**
 * req
 * @param {*} request 
 * @returns 
 */
module.exports = function(request){
    const req = {};
    req.request = request;
    req.url = parseurl(request);

    return req;
};