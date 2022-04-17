'use strict';

var qiaoPluginZip = require('../../lib/qiao-zip.js');

var test = function(){
	var zipFile 	= 'd:/qiao-zip/demo01/test.zip';
	var destFolder	= 'd:/';
	
	qiaoPluginZip.unzip(zipFile, destFolder);
};

test();