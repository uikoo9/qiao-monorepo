'use strict';

var qiaoPluginZip = require('../../lib/qiao.plugin.zip.js');

var test = async function(){
	try{
		var sourceFolder	= 'd:/test';// 该路径下多文件夹，多文件等
		var destZip			= 'd:/qiao.plugin.zip/demo08/test.zip';

		await qiaoPluginZip.zipFolderSync(sourceFolder, destZip);
	}catch(e){
		console.log(e);
	}
};

test();