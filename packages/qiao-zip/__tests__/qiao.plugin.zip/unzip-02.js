'use strict';

var qiaoPluginZip = require('../../lib/qiao.plugin.zip.js');

var test = function(){
	var zipFile 	= 'd:/qiao.plugin.zip/demo02/test.zip';
	var destFolder	= 'd:/qiao.plugin.zip/demo02';
	
	qiaoPluginZip.unzip(zipFile, destFolder);
};

test();