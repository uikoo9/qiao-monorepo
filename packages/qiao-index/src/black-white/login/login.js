'use strict';

// cookie
import Cookies from 'js-cookie';

// qiao
import { login } from 'qiao-service';

/**
 * loginBtnClick
 * @param {*} username 
 * @param {*} password 
 * @param {*} callback 
 * @param {*} loginSucUrl 
 * @returns 
 */
export const loginBtnClick = async (username, password, callback, loginSucUrl) => {
    // check
    callback('');
    if (!username) {
        callback('need username');
        return;
    }
    if (!password) {
        callback('need password');
        return;
    }

    const res = await login(username, password);
    if (res.type != 'success') {
        callback(res.msg);
        return;
    }

    // suc
    callback(res.msg);
    Cookies.set('userid', res.obj.userid);
    Cookies.set('usertoken', res.obj.usertoken);
    location.href = loginSucUrl;
};