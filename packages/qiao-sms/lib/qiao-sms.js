'use strict';

var txsms = require('qcloudsms_js');

/**
 * send
 * 	options.appid	appid
 * 	options.appkey	appkey
 * 	options.mtype	0：普通短信，1：营销短信
 * 	options.cnum	86：中国
 * 	options.sign	签名
 * 	options.mobile	手机号
 * 	options.msg		消息
 * 	callback		回调函数
 */
exports.send = function(options, callback){
	// vars
	var appid 	= options.appid;
	var appkey	= options.appkey;
	var mtype	= options.mtype || 0;
	var cnum	= options.cnum || 86;
	var sign	= options.sign || '坚时科技';
	var mobile	= options.mobile;
	var msg		= options.msg;
	
	// check
	if(!appid){
		console.log('need options.appid');
		return;
	}
	if(!appkey){
		console.log('need options.appkey');
		return;
	}
	if(!mobile){
		console.log('need options.mobile');
		return;
	}
	if(!msg){
		console.log('need options.msg');
		return;
	}
	
	// sign
	msg = '【' + sign + '】' + msg;
	
	// sms sender
	var sms 	= txsms(appid, appkey);
	var sender 	= sms.SmsSingleSender();
	sender.send(mtype, cnum, mobile, msg, '', 'txsms', function(err, req, res){
		// callback
		if(callback){
			callback(err, res);
			return;
		}
		
		// err
		if(err){
			console.log(err);
			return;
		}
		
		// check ext
		if(!res || !res.ext || res.ext != 'txsms'){
			console.log('0000-mismatched ext！');
			return;
		}
		
		// error
		if(res.result != 0){
			console.log(res.result + '-' + res.errmsg);
			return;
		}
		
		// suc
		console.log('ok');
	});
};

/**
 * sendSync
 * 	options.appid	appid
 * 	options.appkey	appkey
 * 	options.mtype	0：普通短信，1：营销短信
 * 	options.cnum	86：中国
 * 	options.sign	签名
 * 	options.mobile	手机号
 * 	options.msg		消息
 */
exports.sendSync = function(options){
	return new Promise(function(resolve, reject){
		exports.send(options, function(err, res){
			// err
			if(err){
				reject(err);
				return;
			}
			
			// check ext
			if(!res || !res.ext || res.ext != 'txsms'){
				resolve('0000-mismatched ext！');
				return;
			}
			
			// error
			if(res.result != 0){
				resolve(res.result + '-' + res.errmsg);
				return;
			}
			
			// suc
			resolve('ok');
		});
	});
};