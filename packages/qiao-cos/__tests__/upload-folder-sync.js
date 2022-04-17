'use strict';

var q 		= require('../index.js');
var client	= q.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = async function(){
	try{
		var destPath		= 'static';
		var sourceFolder	= 'd:/static';
		
		var rs = await q.uploadFolderSync(client, destPath, sourceFolder);
		console.log(rs);
	}catch(e){
		console.log(e);
	}
};

test();