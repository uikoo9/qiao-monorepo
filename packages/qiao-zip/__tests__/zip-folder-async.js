'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip.js');

var test = function(){
	var sourceFolder= 'd:/test/';
	var destZip		= 'd:/test03.zip';
	
	console.log('zip folder ' + sourceFolder);
	console.log('in ' + destZip);
	console.log();
	
	console.log('please wait a moment...');
	console.log();
	
	qiaoPluginZip.zipFolder(sourceFolder, destZip, function(err, msg){
		if(err) throw err;
		console.log(msg);
	});
};

test();