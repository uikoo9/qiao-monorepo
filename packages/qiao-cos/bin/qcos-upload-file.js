'use strict';

// path
var path = require('path');

// qiao
var qiao = {};
qiao.cli = require('qiao-cli');
qiao.cos = require('../index.js');

// cmd for file
qiao.cli.cmd
	.command('file <configPath> <filePath> <bucketPath>')
	.alias('fi')
	.description('upload file to tencent cos bucket')
	.action(uploadFile);

// upload file
async function uploadFile(configPath, filePath, bucketPath){
	try{
        var cwd = process.cwd();
        if(configPath.startsWith('./')) configPath = path.resolve(cwd, configPath);
        if(filePath.startsWith('./')) filePath = path.resolve(cwd, filePath);
		
        var client 	= qiao.cos.client(require(configPath));
		var rs 		= await qiao.cos.uploadFileSync(client, bucketPath, filePath);

		console.log('upload file to tencent cos success!');
		console.log();

		console.log(rs);
	}catch(e){
		console.log('upload file to tencent cos fail!');
		console.log();
		
		console.log(e);
	}
}