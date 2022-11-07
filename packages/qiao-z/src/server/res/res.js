// res methods
import head from './res-head.js';
import end from './res-end.js';
import redirect from './res-redirect.js';
import send from './res-send.js';
import { json, jsonSuccess, jsonFail } from './res-json.js';
import clearCookie from './res-clear-cookie.js';
import render from './res-render.js';

/**
 * res
 * @param {*} response 
 * @param {*} cros 
 * @returns 
 */
const handleRes = (response, cros) => {
    const res = {};
    res.response = response;
    res.cros = cros;
    res.head = (status, options) => { head(res, status, options); };
    res.end = (msg) => { end(res, msg); };
    res.redirect = (url) => { redirect(res, url); };
    res.send = (msg) => { send(res, msg); };
    res.json = (obj) => { json(res, obj); };
    res.jsonSuccess = (msg, obj) => { jsonSuccess(res, msg, obj); };
    res.jsonFail = (msg, obj) => { jsonFail(res, msg, obj); };
    res.clearCookie = (name) => { clearCookie(res, name); };
    res.render = (filePath, data) => { render(res, filePath, data); };

    return res;
};

export default handleRes;