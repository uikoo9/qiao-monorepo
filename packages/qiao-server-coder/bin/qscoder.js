#!/usr/bin/env node

'use strict';

// qiao
var qiao 	= {};
qiao.ajax 	= require('qiao-request');
qiao.cli 	= require('qiao-cli');
qiao.encode = require('qiao-encode');
qiao.zip 	= require('qiao-zip');
qiao.config	= require('../lib/config.json');

// cmd for common
qiao.cli.cmd
	.version(require('../package.json').version, '-v, --version')
	.description('qiao-server-coder, generate server and browser code.')
	.usage('<command>');

// cmd for init code
qiao.cli.cmd
	.command('init <code> <path>')
	.alias('i')
	.description('init code to path')
	.action(initCode);

// cmd for gen code
qiao.cli.cmd
	.command('gen <code> <table> <path>')
	.alias('g')
	.description('gen code by table to path')
	.action(handleCode);

// parse
qiao.cli.cmd.parse(process.argv);

// output help
if(!process.argv.slice(2).length){
	qiao.cli.cmd.outputHelp(function(txt){
		return qiao.cli.colors.green(txt);
	});
}

// init code
async function initCode(code, path){
	// check code
	if(qiao.config.codes.indexOf(code) == -1){
		console.log('error code, see: https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-server-coder#code-list');
		return;
	}
	
	// download zip
	var zipUrl 	= qiao.config.host + code + '/init.zip';
	var tmpdir 	= require('os').tmpdir();
	var tmpName	= qiao.encode.uuid() + '.zip';
	var tmpPath	= require('path').resolve(tmpdir, tmpName); 
	await qiao.ajax.download(zipUrl, tmpPath);
	
	// init code
	qiao.zip.unzip(tmpPath, path);
}

// handle code
function handleCode(code, table, path){
	// check code
	if(qiao.config.codes.indexOf(code) == -1){
		console.log('error code, see: https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-server-coder#code-list');
		return;
	}
	
	// gen code
	require('../codes/' + code + '/coder.js').gen(table, path);
}