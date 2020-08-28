#!/usr/bin/env node

'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');
qiao.config	= require('qiao-config');
qiao.dishi	= require('../lib/dishi.js');
qiao.log 	= require('../lib/log.js');

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
		var userinfo = qiao.config.get('userinfo');
		if(userinfo && userinfo.userid && userinfo.usertoken && userinfo.mobile){
			qiao.log.suc(`already login as ${userinfo.mobile}`);
			return;
		}

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

		await qiao.dishi.login(answers.username, answers.password);
	}catch(e){
		qiao.log.danger(e.message);
	}
}