'use strict';

var qiaoPluginZip = require('../../lib/qiao.plugin.zip.js');

var test = function(){
	var zipFile 	= 'd:/qiao.plugin.zip/demo03/test.zip';
	var destFolder	= 'd:/qiao.plugin.zip/demo99';//这个path不存在
	
	qiaoPluginZip.unzip(zipFile, destFolder);
};

test();