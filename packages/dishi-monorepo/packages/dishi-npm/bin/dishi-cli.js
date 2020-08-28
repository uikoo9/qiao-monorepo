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
async function login(){
	try{
		var answers = await qiao.cli.ask([{
			type	: 'input',
			name	: 'username',
			message	: 'username:'
		},{
			type	: 'password',
			mask	: '*',
			name	: 'password',
			message	: 'password:'
		}]);

		if(!answers.username || !answers.password){
			console.log('need username and password');
			return;
		}
		console.log(answers);
	}catch(e){
		console.log(e.message);
	}
}