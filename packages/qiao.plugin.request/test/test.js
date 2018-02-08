'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip');

var test = function(){
	var zipFile 	= 'd:/test1.zip';
	var destFolder	= 'd:/test2/';
	
	console.log('unzip ' + zipFile);
	console.log('to ' + destFolder);
	console.log();

	console.log('please wait a moment...');
	console.log();
	
	qiaoPluginZip.unzip(zipFile, destFolder);
	console.log('unzip success!');
};

test();