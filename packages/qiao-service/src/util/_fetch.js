// qiao
import { post as ajaxPost } from 'qiao-ajax';
import { danger } from 'qiao-json';

/**
 * post
 *  url
 *  data
 */
export const post = async (url, data) => {
    return await ajax(url, data);
};

/**
 * postWithToken
 *  url
 *  data
 */
export const postWithToken = async (url, data) => {
    const root = global || window;
    if(!root) return danger('no window or global');

    const userinfo = root.insistime_userinfo;
    if(!userinfo || !userinfo.userid || !userinfo.usertoken) return danger('please login first');

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
        res = await ajaxPost(url, options);
    }catch(e){
        console.log(e);
    }
    const time = Date.now() - s;

    // res error
    if(!res) return danger(`${time}ms | request fail`);

    // not 200
    if(res.status != 200) return danger(`${time}ms | request fail: ${res.status}`);

    // no data
    const json = res.data;
    if(!json) return danger(`${time}ms | request fail: no data`);

    // danger
    if(json.type == 'danger') return danger(`${time}ms | ${json.msg}`);

    json.time = time;
    return json;
}