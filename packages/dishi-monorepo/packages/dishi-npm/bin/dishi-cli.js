#!/usr/bin/env node

'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');
qiao.dishi	= require('../lib/dishi.js');

// cmd for common
qiao.cli.cmd
	.version(require('../package.json').version, '-v, --version')
	.description('dishi, dishi todo')
	.usage('<command> [options]');

// cmd for login
qiao.cli.cmd
	.command('login')
	.description('login to dishi todo')
	.action(login);

// parse
qiao.cli.cmd.parse(process.argv);

// output help
if(!process.argv.slice(2).length){
	qiao.cli.cmd.outputHelp(function(txt){
		return qiao.cli.colors.green(txt);
	});
}

// login
function login(){
	console.log('login success');
}