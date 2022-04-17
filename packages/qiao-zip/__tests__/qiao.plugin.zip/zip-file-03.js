'use strict';

var qiaoPluginZip = require('../../lib/qiao.plugin.zip.js');

var test = async function(){
	try{
		var sourceFile	= 'd:/qiao.plugin.zip/demo07/test-你好.js';
		var destZip		= 'd:/qiao.plugin.zip/demo98/test.zip';// demo98这个路径不存在

		await qiaoPluginZip.zipFileSync(sourceFile, destZip);
	}catch(e){
		console.log(e);
	}
};

test();