'use strict';

var qiaoPluginZip = require('../../lib/qiao.plugin.zip.js');

var test = function(){
	var zipFile 	= 'd:/qiao.plugin.zip/demo05/test.zip';// 这个zip中多文件夹嵌套，多文件，中文名文件
	var destFolder	= 'd:/qiao.plugin.zip/demo05';
	
	qiaoPluginZip.unzip(zipFile, destFolder);
};

test();