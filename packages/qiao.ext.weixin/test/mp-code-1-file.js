'use strict';

var qiaoExtWeixin = require('../lib/qiao.ext.weixin.js');

var test = async function(){
	// accessToken, see:https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html
	var accessToken = '17_0AzllqnmN-cnbXzzG07DCTGTiHKbDUARkE6db4WAAe_WDncKQNznPYYpKi_-HBSyvXdt7kUHNGzhcTWj1cKyNhyM_0AJtb5blBVi5Hja7rlVnSQI93GlmIpNlNjDw2J4CK7wr0LI4WDWb0lZXEEfAHAMTT';
	
	// params, see: https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
	var params = {
		path : 'views/ucenter-register/ucenter-register'
	};
	
	// filePath
	var filePath = 'd:/test.png';
	
	// mp code 1 file
	qiaoExtWeixin.mpCode1File(accessToken, params, filePath);
};

test();