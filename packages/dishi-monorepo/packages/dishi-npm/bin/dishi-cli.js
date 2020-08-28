#!/usr/bin/env node

'use strict';

// path
var path = require('path');

// qiao
var qiao = {};
qiao.cli = require('qiao.plugin.cli');
qiao.cos = require('../lib/dishi.js');

// cmd for common
qiao.cli.cmd
	.version(require('../package.json').version, '-v, --version')
	.description('dishi, tencent cos upload tool on nodejs')
	.usage('<command> [options]');

// cmd for file
qiao.cli.cmd
	.command('file <configPath> <filePath> <bucketPath>')
	.alias('fi')
	.description('upload file to tencent cos bucket')
	.action(uploadFile);

// cmd for folder
qiao.cli.cmd
	.command('folder <configPath> <folderPath> <bucketPath>')
	.alias('fo')
	.description('upload folder to tencent cos bucket')
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

// upload folder
async function uploadFolder(configPath, folderPath, bucketPath, options){
	try{
        var cwd = process.cwd();
        if(configPath.startsWith('./')) configPath = path.resolve(cwd, configPath);
        if(folderPath.startsWith('./')) folderPath = path.resolve(cwd, folderPath);

		var client 	= qiao.cos.client(require(configPath));
		var rs 		= await qiao.cos.uploadFolderSync(client, bucketPath, folderPath);

		console.log('upload folder to tencent cos success!');
		console.log();

		if(options.info) console.log(rs);
	}catch(e){
		console.log('upload folder to tencent cos fail!');
		console.log();
		
		console.log(e);
	}
}
