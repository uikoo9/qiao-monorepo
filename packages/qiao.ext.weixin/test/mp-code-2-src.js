'use strict';

var qiaoExtWeixin = require('../lib/qiao.ext.weixin.js');

var test = async function(){
	// accessToken
	var accessToken = '17_0AzllqnmN-cnbXzzG07DCTGTiHKbDUARkE6db4WAAe_WDncKQNznPYYpKi_-HBSyvXdt7kUHNGzhcTWj1cKyNhyM_0AJtb5blBVi5Hja7rlVnSQI93GlmIpNlNjDw2J4CK7wr0LI4WDWb0lZXEEfAHAMTT';
	
	// params
	var params = {
		page : 'views/ucenter-register/ucenter-register',
		scene: '1'
	};
	
	// mp code 2 src
	var src = await qiaoExtWeixin.mpCode2Src(accessToken, params);
//	var src = await qiaoExtWeixin.mpCode2Src(accessToken, params, 'jpg');
	console.log(src);
};

test();