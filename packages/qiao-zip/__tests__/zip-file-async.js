'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip.js');

var test = function(){
	var sourceFile	= 'd:/test.js';
	var destZip		= 'd:/test01.zip';
	
	console.log('zip file ' + sourceFile);
	console.log('in ' + destZip);
	console.log();
	
	console.log('please wait a moment...');
	console.log();
	
	qiaoPluginZip.zipFile(sourceFile, destZip, function(err, msg){
		if(err) throw err;
		console.log(msg);
	});
};

test();