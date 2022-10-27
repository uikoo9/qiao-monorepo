/**
 * error
 * @param {*} res 
 * @param {*} msg 
 */
export const error = (res, msg) => {
    // check
    if (!res || !msg) return;

    // res
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(msg);
};