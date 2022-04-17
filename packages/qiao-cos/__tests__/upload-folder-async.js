'use strict';

var q 		= require('../index.js');
var client	= q.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = function(){
	var destPath		= 'static';
	var sourceFolder	= 'd:/static';
	
	q.uploadFolder(client, destPath, sourceFolder, function(rs){
		console.log(rs);
	});
};

test();