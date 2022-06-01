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
	const userinfo = global.userinfo;
	if(!userinfo || !userinfo.userid || !userinfo.usertoken){
		danger(`please login first`);
		return;
	}

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
	}
	const time = Date.now() - s;

	// res error
	if(!res){
		danger(`${time}ms | request fail`);
		return;
	}

	// not 200
	if(res.status != 200){
		danger(`${time}ms | request fail: ${res.status}`);
		return;
	}

	// no data
	const json = res.data;
	if(!json){
		danger(`${time}ms | request fail: no data`);
		return;
	}

	// danger
	if(json.type == 'danger'){
		danger(`${time}ms | ${json.msg}`);
		return;
	}

	json.time = time;
    return json;
}