'use strict';

// qiao
import { login } from 'qiao-service';

/**
 * loginBtnClick
 * @param {*} that 
 */
export const loginBtnClick = async (username, password, callback) => {
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

    callback(res.msg);
};