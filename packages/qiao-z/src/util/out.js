/**
 * error
 * @param {*} res 
 * @param {*} msg 
 */
exports.error = function(res, msg){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(msg);
};