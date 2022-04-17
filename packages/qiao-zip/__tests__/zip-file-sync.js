'use strict';

var qiaoPluginZip = require('../lib/qiao.plugin.zip.js');

var test = async function(){
	try{
		var sourceFile	= 'd:/test.js';
		var destZip		= 'd:/test02.zip';

		console.log('zip file ' + sourceFile);
		console.log('in ' + destZip);
		console.log();
		
		console.log('please wait a moment...');
		console.log();
		
		var msg = await qiaoPluginZip.zipFileSync(sourceFile, destZip);
		console.log(msg);
	}catch(e){
		console.log(e);
	}
};

test();