'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip.js');

var test = async function(){
	try{
		var sourceFolder= 'd:/test/';
		var destZip		= 'd:/test04.zip';

		console.log('zip folder ' + sourceFolder);
		console.log('in ' + destZip);
		console.log();
		
		console.log('please wait a moment...');
		console.log();
		
		var msg = await qiaoPluginZip.zipFolderSync(sourceFolder, destZip);
		console.log(msg);
	}catch(e){
		console.log(e);
	}
};

test();