'use strict';

// config
import config from '../util/_server.json';

// fetch
import { post} from '../util/_fetch.js';

// qjson
import { danger } from 'qiao-json'; 

/**
 * register
 * @param {*} mobile 
 * @param {*} password 
 * @param {*} repassword 
 * @param {*} code 
 * @returns 
 */
export const register = async (mobile, password, repassword, code) => {
    if(!mobile || !password || !repassword || !code) return danger('need mobile, code, password');
    if(password != repassword) return danger('the two password do not match');

    const url 	= config.host + config.register;
    const data	= {
        username : mobile,
        password : password,
        usercode : code
    };

    return await post(url, data);
};

/**
 * login
 * @param {*} mobile 
 * @param {*} password 
 * @returns 
 */
export const login = async (mobile, password) => {
    if(!mobile || !password) return danger('need mobile and password');

    const url 	= config.host + config.login;
    const data	= {
        username: mobile,
        password: password
    };
	
    return await post(url, data);
};

/**
 * sendCode
 * @param {*} mobile 
 * @returns 
 */
export const sendCode = async (mobile) => {
    if(!mobile) return danger('need mobile');

    const url 	= config.host + config.sendCode;
    const data	= {
        type	: 'reg',
        sign	: '坚时科技',
        mobile	: mobile
    };

    return await post(url, data);
};