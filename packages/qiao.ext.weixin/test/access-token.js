'use strict';

var qiaoExtWeixin = require('../lib/qiao.ext.weixin.js');

var test = async function(){
	var appId		= require('./config.json').AppID;
	var appSecret	= require('./config.json').AppSecret;
	
	var accessToken	= await qiaoExtWeixin.accessToken(appId, appSecret);
	console.log(accessToken);
};

test();