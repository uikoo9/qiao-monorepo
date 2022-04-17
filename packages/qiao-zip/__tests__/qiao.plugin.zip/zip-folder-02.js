'use strict';

var qiaoPluginZip = require('../../lib/qiao-zip.js');

var test = async function(){
	try{
		var sourceFolder	= 'd:/test';// 该路径下多文件夹，多文件等
		var destZip			= 'd:/qiao-zip/demo09/test.zip';

		await qiaoPluginZip.zipFolderSync(sourceFolder, destZip, 'test');
	}catch(e){
		console.log(e);
	}
};

test();