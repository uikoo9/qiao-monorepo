'use strict';

var qiaoPluginZip = require('../../lib/qiao.plugin.zip.js');

var test = async function(){
	try{
		var sourceFile	= 'd:/qiao.plugin.zip/demo06/test.js';
		var destZip		= 'd:/qiao.plugin.zip/demo06/test.zip';

		await qiaoPluginZip.zipFileSync(sourceFile, destZip);
	}catch(e){
		console.log(e);
	}
};

test();