'use strict';

var qiaoPluginZip = require('../lib/qiao-zip.js');

var test = async function(){
	try{
		var sourceFile	= '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-zip/lib/qiao-zip.js';
		var destZip		= './1.zip';

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