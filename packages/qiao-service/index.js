'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var qiaoAjax = require('qiao-ajax');
var qiaoJson = require('qiao-json');

var host = 'https://insistime.com/';
var login$1 = 'ucenter/user/login';
var sendCode$1 = 'ucenter/code/send';
var register$1 = 'ucenter/user/reg';
var ucenterMenuList$1 = 'ucenter/menu/list';
var ucenterMenuSave$1 = 'ucenter/menu/save';
var ucenterMenuDel$1 = 'ucenter/menu/del';
var ucenterMenuGet$1 = 'ucenter/menu/get';
var config = {
    host: host,
    login: login$1,
    sendCode: sendCode$1,
    register: register$1,
    ucenterMenuList: ucenterMenuList$1,
    ucenterMenuSave: ucenterMenuSave$1,
    ucenterMenuDel: ucenterMenuDel$1,
    ucenterMenuGet: ucenterMenuGet$1
};

// qiao

/**
 * post
 *  url
 *  data
 */
const post = async (url, data) => {
    return await ajax(url, data);
};

/**
 * postWithToken
 *  url
 *  data
 */
const postWithToken = async (url, data) => {
    const root = global || window;
    if(!root) return qiaoJson.danger('no window or global');

    const userinfo = root.insistime_userinfo;
    if(!userinfo || !userinfo.userid || !userinfo.usertoken) return qiaoJson.danger('please login first');

    const headers = {
        userid 		: userinfo.userid,
        usertoken	: userinfo.usertoken
    };
    return await ajax(url, data, headers);
};

// ajax
async function ajax(url, data, headers){
    let options = {data: data};
    if(headers) options.headers = headers;

    const s = Date.now();
    let res;
    try{
        res = await qiaoAjax.post(url, options);
    }catch(e){
        console.log(e);
    }
    const time = Date.now() - s;

    // res error
    if(!res) return qiaoJson.danger(`${time}ms | request fail`);

    // not 200
    if(res.status != 200) return qiaoJson.danger(`${time}ms | request fail: ${res.status}`);

    // no data
    const json = res.data;
    if(!json) return qiaoJson.danger(`${time}ms | request fail: no data`);

    // danger
    if(json.type == 'danger') return qiaoJson.danger(`${time}ms | ${json.msg}`);

    json.time = time;
    return json;
}

/**
 * register
 * @param {*} mobile 
 * @param {*} password 
 * @param {*} repassword 
 * @param {*} code 
 * @returns 
 */
const register = async (mobile, password, repassword, code) => {
    if(!mobile || !password || !repassword || !code) return qiaoJson.danger('need mobile, code, password');
    if(password != repassword) return qiaoJson.danger('the two password do not match');

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
const login = async (mobile, password) => {
    if(!mobile || !password) return qiaoJson.danger('need mobile and password');

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
const sendCode = async (mobile) => {
    if(!mobile) return qiaoJson.danger('need mobile');

    const url 	= config.host + config.sendCode;
    const data	= {
        type	: 'reg',
        sign	: '坚时科技',
        mobile	: mobile
    };

    return await post(url, data);
};

/**
 * ucenterMenuList
 * @param {*} pagenumber 
 * @param {*} pagesize 
 * @returns 
 */
const ucenterMenuList = async (pagenumber, pagesize) => {
    const url = config.host + config.ucenterMenuList;
    const data = { 
        page: pagenumber || '1',
        rows: pagesize || '10' 
    };

    return await postWithToken(url, data);
};

/**
 * ucenterMenuSave
 * @param {*} data 
 * @returns 
 */
const ucenterMenuSave = async (data) => {
    const url = config.host + config.ucenterMenuSave;
    let opt = {
        ucenterMenuParent: data.ucenter_menu_parent,
        ucenterMenuSn: data.ucenter_menu_sn,
        ucenterMenuTitle: data.ucenter_menu_title,
        ucenterMenuUrl: data.ucenter_menu_url
    };
    if (data.id) opt.id = data.id;

    return await postWithToken(url, opt);
};

/**
 * ucenterMenuDel
 * @param {*} ids 
 * @returns 
 */
const ucenterMenuDel = async (ids) => {
    const url = config.host + config.ucenterMenuDel;
    const data = { ids: ids };

    return await postWithToken(url, data);
};

/**
 * ucenterMenuGet
 * @param {*} id 
 * @returns 
 */
const ucenterMenuGet = async (id) => {
    if (!id) return qiaoJson.danger('need id');

    const url = config.host + config.ucenterMenuGet;
    const data = { id: id };

    const json = await postWithToken(url, data);
    if (!json || !json.obj || !json.obj.rows || !json.obj.rows.length) {
        return qiaoJson.danger(`can not find item by ${id}`);
    }

    var item = json.obj.rows[0];
    item.time = json.time;
    return item;
};

exports.login = login;
exports.register = register;
exports.sendCode = sendCode;
exports.ucenterMenuDel = ucenterMenuDel;
exports.ucenterMenuGet = ucenterMenuGet;
exports.ucenterMenuList = ucenterMenuList;
exports.ucenterMenuSave = ucenterMenuSave;
