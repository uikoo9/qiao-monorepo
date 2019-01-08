var fs		= require('fs');
var request = require('request');
var crypto 	= require('crypto');

/**
 * check token
 */
exports.checkToken = function(token, signature, timestamp, nonce, echostr){
	if(signature && timestamp && nonce && echostr){
		var tokenstr = [token, timestamp, nonce];
		
		var hash = crypto.createHash('sha1');
		hash.update(tokenstr.sort().join(''));
		var enstr = hash.digest('hex');
		
		if(enstr == signature) return echostr;
	}
	
	return '';
}

/**
 * access token
 * appid
 * secret
 */
exports.accessToken = function(appid, secret){
	return new Promise(function(resolve, reject){
		var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret;
		request.get(url, function(err, response, body){
			resolve(err ? null : JSON.parse(body));
		});
	});
};

/**
 * js api
 * token
 */
exports.jsApi = function(accessToken){
	return new Promise(function(resolve, reject){
		var url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=' + accessToken;
		request.get(url, function(err, response, body){
			resolve(err ? null : JSON.parse(body));
		});
	});
};

/**
 * js signature
 * ticket
 * url
 * appid
 */
exports.weixinJsSignature = function(ticket, url, appid){
	var noncestr 	= Math.random().toString(36).substr(2, 15);
	var timestamp	= parseInt(new Date().getTime() / 1000) + '';
	var str 		= 'jsapi_ticket=' + ticket + '&noncestr=' + noncestr + '&timestamp=' + timestamp + '&url=' + url;
	
	var hash = crypto.createHash('sha1');
	hash.update(str);
	var signature = hash.digest('hex');
	
	return {
		url			: url,
		appid		: appid,
		timestamp	: timestamp,
		noncestr	: noncestr, 
		signature	: signature
	};
};

/**
 * web login url
 * isMobile	
 * appid
 * uri
 * type		m-snsapi_base, m-snsapi_userinfo, pc-snsapi_login
 * param
 */
exports.webLoginUrl = function(isMobile, appid, uri, type, param){
	var urlForM		= 'https://open.weixin.qq.com/connect/oauth2/authorize?';
	var urlForPC 	= 'https://open.weixin.qq.com/connect/qrconnect?';
	var url			= isMobile ? urlForM : urlForPC;
	
	var ss = [];
	ss.push(url);
	ss.push("appid=" + appid);
	ss.push("&redirect_uri=" + encodeURIComponent(uri));
	ss.push("&response_type=code");
	ss.push("&scope=" + type);
	if(param) ss.push("&state=" + param);
	ss.push("#wechat_redirect");
	
	return ss.join('');
};

/**
 * web accesstoken
 * appid
 * secret
 * code
 */
exports.webAccessToken = function(appid, secret, code){
	return new Promise(function(resolve, reject){
		var url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' + appid + '&secret=' + secret + '&code=' + code + '&grant_type=authorization_code';
		request.get(url, function(err, response, body){
			resolve(err ? null : JSON.parse(body));
		});
	});
};

/**
 * web userinfo
 * accessToken
 * openid
 */
exports.webUserinfo = function(accessToken, openid){
	return new Promise(function(resolve, reject){
		var url = 'https://api.weixin.qq.com/sns/userinfo?access_token=' + accessToken + '&openid=' + openid + '&lang=zh_CN';
		request.get(url, function(err, response, body){
			resolve(err ? null : JSON.parse(body));
		});
	});
};

/**
 * mp code 1 file
 * 	accessToken, https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html
 * 	params, https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
 * 	filePath
 */
exports.mpCode1File = async function(accessToken, params, filePath){
	try{
		// check file path
		if(!filePath){
			console.log('need file path');
			return;
		}
		
		// data
		var data = await exports.mpCode1(accessToken, null, params);
		if(!data) return;
		
		// write file
		await fs.writeFileSync(filePath, data);
		
		// log
		console.log('success');
	}catch(e){
		console.log(e);
	}
};

/**
 * mp code 1 src
 * 	accessToken, https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html
 * 	params, https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
 * 	fileType
 */
exports.mpCode1Src = async function(accessToken, params, fileType){
	try{
		// data
		var data = await exports.mpCode1(accessToken, 'base64', params);
		if(!data) return;
		
		// type
		var type = fileType || 'png';
		
		// return
		return 'data:image/' + type + ';base64,' + data;
	}catch(e){
		console.log(e);
		return;
	}
};

/**
 * mp code 1
 */
exports.mpCode1 = async function(accessToken, encoding, params){
	try{
		// check access token
		if(!accessToken){
			console.log('need accessToken!');
			return;
		}
		
		// check params
		if(!params || !params.path){
			console.log('need params, params.path!');
			return;
		}
		
		// url
		var url = 'https://api.weixin.qq.com/wxa/getwxacode?access_token=' + accessToken;
		
		// data
		var data = await exports.mpCode(url, encoding, params);
		if(data.errcode){
			console.log(data);
			return;
		}
		
		// return
		return data;
	}catch(e){
		console.log(e);
		return;
	}
};

/**
 * mp code 2 file
 * 	accessToken, https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html
 * 	params, https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
 * 	filePath
 */
exports.mpCode2File = async function(accessToken, params, filePath){
	try{
		// check file path
		if(!filePath){
			console.log('need file path');
			return;
		}
		
		// data
		var data = await exports.mpCode2(accessToken, null, params);
		if(!data) return;
		
		// write file
		await fs.writeFileSync(filePath, data);
		
		// log
		console.log('success');
	}catch(e){
		console.log(e);
	}
};

/**
 * mp code 2 src
 * 	accessToken, https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html
 * 	params, https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
 * 	fileType
 */
exports.mpCode2Src = async function(accessToken, params, fileType){
	try{
		// data
		var data = await exports.mpCode2(accessToken, 'base64', params);
		if(!data) return;
		
		// type
		var type = fileType || 'png';
		
		// return
		return 'data:image/' + type + ';base64,' + data;
	}catch(e){
		console.log(e);
		return;
	}
};

/**
 * mp code 2
 */
exports.mpCode2 = async function(accessToken, encoding, params){
	try{
		// check access token
		if(!accessToken){
			console.log('need accessToken!');
			return;
		}
		
		// check params
		if(!params || !params.scene){
			console.log('need params, params.scene!');
			return;
		}
		
		// url
		var url = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + accessToken;
		
		// data
		var data = await exports.mpCode(url, encoding, params);
		if(data.errcode){
			console.log(data);
			return;
		}
		
		// return
		return data;
	}catch(e){
		console.log(e);
		return;
	}
};

/**
 * mp code
 * 	url
 * 	encoding
 * 	data
 */
exports.mpCode = function(url, encoding, data){
	var options = {
		url 		: url,
		encoding	: encoding,
		json		: data
	};
	
	return new Promise(function(resolve, reject){
		request.post(options, function(err, response, body){
			return err ? reject(err) : resolve(body);
		});
	});
};