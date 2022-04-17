'use strict';

var qiaoPluginZip = require('../../lib/qiao-zip.js');

var test = async function(){
	try{
		var sourceFile	= 'd:/qiao-zip/demo07/test-你好.js';
		var destZip		= 'd:/qiao-zip/demo07/test.zip';

		await qiaoPluginZip.zipFileSync(sourceFile, destZip);
	}catch(e){
		console.log(e);
	}
};

test();