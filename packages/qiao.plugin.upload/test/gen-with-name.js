'use strict';

var qiaoPluginUpload = require('../lib/qiao.plugin.upload.js');

function test(){
	var dir		= 'd:/';
	var upload 	= qiaoPluginUpload.genWithName(dir);
	
	console.log(upload);
}

test(); 