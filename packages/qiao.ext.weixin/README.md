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

## mpCode1File
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
	
	// mp code 1 file
	qiaoExtWeixin.mpCode1File(accessToken, params, filePath);
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
		path : 'views/ucenter-register/ucenter-register'
	};
	
	// mp code 1 src
	var src = await qiaoExtWeixin.mpCode1Src(accessToken, params);
//	var src = await qiaoExtWeixin.mpCode1Src(accessToken, params, 'jpg');
	console.log(src);
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

# version
## 0.0.3.20190108
1. 接口1生成文件
2. 接口1生成src

## 0.0.2.20190107
1. nodejs weixin sdk

## 0.0.1.20190104
1. init project
2. access token