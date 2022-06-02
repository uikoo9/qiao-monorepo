'use strict';

// qiao
import { login } from 'qiao-service';

/**
 * clickLoginBtn
 * @param {*} that 
 */
export const clickLoginBtn = async (that) => {
    // vars
    const username = that.state.username;
    const password = that.state.password;

    // check
    setTips(that, '');
    if (!username) {
        setTips(that, 'need username');
        return;
    }
    if (!password) {
        setTips(that, 'need password');
        return;
    }

    const res = await login(username, password);
    if (res.type != 'success') {
        setTips(that, res.msg);
        return;
    }

    setTips(that, res.msg);
};

const setTips = (that, msg) => {
    that.setState({
        tips: msg
    });
};