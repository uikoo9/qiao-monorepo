'use strict';

var q 		= require('../index.js');
var client	= q.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = function(){
	var destPath		= 'test';
	var sourceFolder	= 'd:/test/cocos';
	
	q.uploadFolder(client, destPath, sourceFolder, function(err, rs){
		if(err) throw err;
		
		console.log(rs);
	});
};

test();