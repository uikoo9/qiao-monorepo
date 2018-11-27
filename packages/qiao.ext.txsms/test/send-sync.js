'use strict';

var qiaoExtTxsms = require('../lib/qiao.ext.txsms.js');

var test = async function(){
	try{
		// 普通单条短信-简化
		var msg1 = await qiaoExtTxsms.sendSync({
			appid 	: 'your appid',
			appkey	: 'your appkey',
			sign	: 'your sign',
			mobile	: 'mobile',
			msg		: '您的验证码是：1234，如非本人操作，请忽略此短信。',
		});
		console.log(msg1);
		
		// 普通单条短信-定制&回调
		var msg2 = qiaoExtTxsms.send({
			appid 	: 'your appid',
			appkey	: 'your appkey',
			sign	: 'your sign',
			mobile	: 'mobile',
			msg		: '您的验证码是：1234，如非本人操作，请忽略此短信。',
			mtype	: '0：普通短信，1：营销短信，可选',
			cnum	: '86：中国，可选',
		});
		console.log(msg2);
	}catch(e){
		console.log(e);
	}
};

test();