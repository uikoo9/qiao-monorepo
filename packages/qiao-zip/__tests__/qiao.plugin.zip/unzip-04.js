'use strict';

var qiaoPluginZip = require('../../lib/qiao-zip.js');

var test = function(){
	var zipFile 	= 'd:/qiao-zip/demo04/test.zip';// 这个zip中的文件为test-你好.js
	var destFolder	= 'd:/qiao-zip/demo04';
	
	qiaoPluginZip.unzip(zipFile, destFolder);
};

test();