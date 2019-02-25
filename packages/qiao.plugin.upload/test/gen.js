'use strict';

var qiaoPluginUpload = require('../lib/qiao.plugin.upload.js');

function test(){
	var dir		= 'd:/';
	var filename= '1.txt';
	var upload 	= qiaoPluginUpload.gen(dir, filename);
	
	console.log(upload);
}

test(); 