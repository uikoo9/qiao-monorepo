'use strict';

var q = require('../index.js');

var test = async function(){
	// accessToken
	var accessToken = '17_0AzllqnmN-cnbXzzG07DCTGTiHKbDUARkE6db4WAAe_WDncKQNznPYYpKi_-HBSyvXdt7kUHNGzhcTWj1cKyNhyM_0AJtb5blBVi5Hja7rlVnSQI93GlmIpNlNjDw2J4CK7wr0LI4WDWb0lZXEEfAHAMTT';
	
	// mp code file by api 1 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
	q.mpCodeFile(1, accessToken, {path:'views/ucenter-register/ucenter-register'}, 'd:/test1.png');

	// mp code file by api 2 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACodeUnlimit.html
	q.mpCodeFile(2, accessToken, {page:'views/ucenter-register/ucenter-register', scene:'1'}, 'd:/test2.png');
	
	// mp code file by api 3 : https://developers.weixin.qq.com/miniprogram/dev/api/createWXAQRCode.html
	q.mpCodeFile(3, accessToken, {path:'views/ucenter-register/ucenter-register'}, 'd:/test3.png');
};

test();