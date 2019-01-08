'use strict';

var qiaoExtWeixin = require('../lib/qiao.ext.weixin.js');

var test = async function(){
	// accessToken
	var accessToken = '17_0AzllqnmN-cnbXzzG07DCTGTiHKbDUARkE6db4WAAe_WDncKQNznPYYpKi_-HBSyvXdt7kUHNGzhcTWj1cKyNhyM_0AJtb5blBVi5Hja7rlVnSQI93GlmIpNlNjDw2J4CK7wr0LI4WDWb0lZXEEfAHAMTT';
	
	// params
	var params = {
		path : 'views/ucenter-register/ucenter-register'
	};
	
	// filePath
	var filePath = 'd:/test.png';
	
	// mp code 3 file
	qiaoExtWeixin.mpCode3File(accessToken, params, filePath);
};

test();