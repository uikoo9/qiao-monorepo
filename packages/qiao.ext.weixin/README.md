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

# version
## 0.0.2.20190107
1. nodejs weixin sdk

## 0.0.1.20190104
1. init project
2. access token