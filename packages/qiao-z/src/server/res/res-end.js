/**
 * res.end
 * @param {*} res 
 * @param {*} msg 
 */
const end = (res, msg) => {
    // check
    if (!res) return;

    // clear cookies
    if (res.clearCookies && res.clearCookies.length) {
        res.response.setHeader('Set-Cookie', res.clearCookies);
        delete res.clearCookies;
    }

    // heads
    if (res.heads && res.heads.length) {
        res.heads.forEach((v) => {
            // opt
            let opt = v.options;

            // cros
            if (res.cros && v.status == 200) opt = Object.assign({}, res.cros, v.options);

            // head
            res.response.writeHead(v.status, opt);
        });

        // delete
        delete res.cros;
        delete res.heads;
    }

    // delete
    delete res.head;
    delete res.end;

    // end
    res.response.end(msg);
};

export default end;