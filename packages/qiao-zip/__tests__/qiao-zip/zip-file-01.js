'use strict';

var qiaoPluginZip = require('../../lib/qiao-zip.js');

var test = async function(){
	try{
		var sourceFile	= 'd:/qiao-zip/demo06/test.js';
		var destZip		= 'd:/qiao-zip/demo06/test.zip';

		await qiaoPluginZip.zipFileSync(sourceFile, destZip);
	}catch(e){
		console.log(e);
	}
};

test();