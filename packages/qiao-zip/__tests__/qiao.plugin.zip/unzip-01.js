'use strict';

var qiaoPluginZip = require('../../lib/qiao.plugin.zip.js');

var test = function(){
	var zipFile 	= 'd:/qiao.plugin.zip/demo01/test.zip';
	var destFolder	= 'd:/';
	
	qiaoPluginZip.unzip(zipFile, destFolder);
};

test();