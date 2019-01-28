#!/usr/bin/env node

'use strict';

// qiao
var qiao = {};
qiao.cli = require('qiao.plugin.cli');
qiao.oss = require('../lib/qiao.ext.oss.js');

// cmd for common
qiao.cli.cmd
	.version(require('../package.json').version, '-v, --version')
	.description('qiao.ext.oss, ali oss upload tool on nodejs')
	.usage('<command> [options]');

// cmd for file
qiao.cli.cmd
	.command('file <configPath> <filePath> <bucketPath>')
	.alias('fi')
	.description('upload file to ali oss bucket')
	.action(uploadFile);

// cmd for folder
qiao.cli.cmd
	.command('folder <configPath> <folderPath> <bucketPath>')
	.alias('fo')
	.description('upload folder to ali oss bucket')
	.option('-i, --info', 'show upload info')
	.action(uploadFolder);

// parse
qiao.cli.cmd.parse(process.argv);

// output help
if(!process.argv.slice(2).length){
	qiao.cli.cmd.outputHelp(function(txt){
		return qiao.cli.colors.green(txt);
	});
}

// upload file
async function uploadFile(configPath, filePath, bucketPath){
	try{
		var client 	= qiao.oss.client(require(configPath));
		var rs 		= await qiao.oss.uploadFileSync(client, bucketPath, filePath);
		
		console.log('upload file to alioss success!');
		console.log();

		console.log(rs);
	}catch(e){
		console.log('upload file to alioss fail!');
		console.log();
		
		console.log(e);
	}
}

// upload folder
async function uploadFolder(configPath, folderPath, bucketPath, options){
	try{
		var client 	= qiao.oss.client(require(configPath));
		var rs 		= await qiao.oss.uploadFolderSync(client, bucketPath, folderPath);
		
		console.log('upload folder to alioss success!');
		console.log();
		
		if(options.info) console.log(rs);
	}catch(e){
		console.log('upload folder to alioss fail!');
		console.log();
		
		console.log(e);
	}
}