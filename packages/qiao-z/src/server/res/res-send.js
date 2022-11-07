/**
 * res.send
 * @param {*} res 
 * @param {*} msg 
 * @returns 
 */
const send = (res, msg) => {
    if (!res || !msg) return;

    res.head(200, { 'Content-Type': 'text/plain' });
    res.end(msg);
};

export default send;