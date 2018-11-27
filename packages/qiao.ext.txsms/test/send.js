'use strict';

var qiaoExtTxsms = require('../lib/qiao.ext.txsms.js');

var test = function(){
	// 普通单条短信-简化
	qiaoExtTxsms.send({
		appid 	: 'your appid',
		appkey	: 'your appkey',
		sign	: 'your sign',
		mobile	: 'mobile',
		msg		: '您的验证码是：1234，如非本人操作，请忽略此短信。',
	});
	
	// 普通单条短信-定制&回调
	qiaoExtTxsms.send({
		appid 	: 'your appid',
		appkey	: 'your appkey',
		sign	: 'your sign',
		mobile	: 'mobile',
		msg		: '您的验证码是：1234，如非本人操作，请忽略此短信。',
		mtype	: '0：普通短信，1：营销短信，可选',
		cnum	: '86：中国，可选',
	}, function(err, res){
		console.log(err, res);
	});
};

test();