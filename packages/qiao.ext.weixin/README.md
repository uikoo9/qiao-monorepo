# urls
## homepage
[https://code.insistime.com/qiao.ext.weixin](https://code.insistime.com/qiao.ext.weixin)

## github
[https://github.com/insistime/qiao.ext.weixin](https://github.com/insistime/qiao.ext.weixin)

## npm
[https://www.npmjs.com/package/qiao.ext.weixin](https://www.npmjs.com/package/qiao.ext.weixin)

# started
## install
npm install qiao.ext.weixin

## dependencies
1. request

## documentation
1. request, https://www.npmjs.com/package/request

# api
## accessToken
```javascript
'use strict';

var qiaoExtWeixin = require('qiao.ext.weixin');

var test = async function(){
	var appId		= require('./config.json').AppID;
	var appSecret	= require('./config.json').AppSecret;
	
	var accessToken	= await qiaoExtWeixin.accessToken(appId, appSecret);
	console.log(accessToken);
};

test();
```

## mpCodeFile
```javascript
'use strict';

var qiaoExtWeixin = require('qiao.ext.weixin');

var test = async function(){
	// accessToken
	var accessToken = '';
	
	// mp code file by api 1 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
	qiaoExtWeixin.mpCodeFile(1, accessToken, {path:'views/ucenter-register/ucenter-register'}, 'd:/test1.png');

	// mp code file by api 2 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACodeUnlimit.html
	qiaoExtWeixin.mpCodeFile(2, accessToken, {page:'views/ucenter-register/ucenter-register', scene:'1'}, 'd:/test2.png');
	
	// mp code file by api 3 : https://developers.weixin.qq.com/miniprogram/dev/api/createWXAQRCode.html
	qiaoExtWeixin.mpCodeFile(3, accessToken, {path:'views/ucenter-register/ucenter-register'}, 'd:/test3.png');
};

test();
```

## mpCodeSrc
```javascript
'use strict';

var qiaoExtWeixin = require('qiao.ext.weixin');

var test = async function(){
	// accessToken
	var accessToken = '';
	
	// mp code src by api 1 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
	var src1 = await qiaoExtWeixin.mpCodeSrc(1, accessToken, {path:'views/ucenter-register/ucenter-register'});

	// mp code src by api 2 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACodeUnlimit.html
	var src2 = await qiaoExtWeixin.mpCodeSrc(2, accessToken, {page:'views/ucenter-register/ucenter-register', scene:'1'}, 'jpg');
	
	// mp code src by api 3 : https://developers.weixin.qq.com/miniprogram/dev/api/createWXAQRCode.html
	var src3 = await qiaoExtWeixin.mpCodeSrc(3, accessToken, {path:'views/ucenter-register/ucenter-register'}, 'png');
	
	console.log(src1);
	console.log(src2);
	console.log(src3);
};

test();
```

## mpCode2File
```javascript
'use strict';

var qiaoExtWeixin = require('qiao.ext.weixin');

var test = async function(){
	// accessToken
	var accessToken = '';
	
	// params
	var params = {
		page : 'views/ucenter-register/ucenter-register',
		scene: '1'
	};
	
	// filePath
	var filePath = 'd:/test.png';
	
	// mp code 1 file
	qiaoExtWeixin.mpCode2File(accessToken, params, filePath);
};

test();
```

## mpCode1Src
```javascript
'use strict';

var qiaoExtWeixin = require('qiao.ext.weixin');

var test = async function(){
	// accessToken
	var accessToken = '';
	
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
```

## mpCode3File
```javascript
'use strict';

var qiaoExtWeixin = require('qiao.ext.weixin');

var test = async function(){
	// accessToken
	var accessToken = '';
	
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
```

## mpCode3Src
```javascript
'use strict';

var qiaoExtWeixin = require('qiao.ext.weixin');

var test = async function(){
	// accessToken
	var accessToken = '';
	
	// params
	var params = {
		path : 'views/ucenter-register/ucenter-register'
	};
	
	// mp code 3 src
	var src = await qiaoExtWeixin.mpCode3Src(accessToken, params);
//	var src = await qiaoExtWeixin.mpCode3Src(accessToken, params, 'jpg');
	console.log(src);
};

test();
```

# version
## 0.0.3.20190108
1. 接口1生成文件
2. 接口1生成src

## 0.0.2.20190107
1. nodejs weixin sdk

## 0.0.1.20190104
1. init project
2. access token