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
	.usage('<command> [options]');

// cmd for login
qiao.cli.cmd
	.command('login')
	.description('login to dishi todo')
	.action(login);

// cmd for logout
qiao.cli.cmd
	.command('logout')
	.description('logout from dishi todo')
	.action(logout);

// cmd for whoami
qiao.cli.cmd
	.command('whoami')
	.description('whoami in dishi todo')
	.action(whoami);

// cmd for reg
qiao.cli.cmd
	.command('reg')
	.description('register to dishi todo')
	.action(register);

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
			name	: 'mobile',
			message	: 'mobile:'
		},{
			type	: 'password',
			mask	: '*',
			name	: 'password',
			message	: 'password:'
		}]);

		await qiao.dishi.login(answers.mobile, answers.password);
	}catch(e){
		qiao.log.danger(e.message);
	}
}

// logout
function logout(){
	qiao.config.clear();
	qiao.log.suc(`already logout`);
}

// whoami
function whoami(){
	var userinfo = qiao.config.get('userinfo');
	if(userinfo && userinfo.userid && userinfo.usertoken && userinfo.mobile){
		qiao.log.suc(`login as ${userinfo.mobile}`);
		return;
	}

	qiao.log.danger(`not login`);
}

// register
async function register(){
	try{
		var mobileAnswers = await qiao.cli.ask([{
			type	: 'input',
			name	: 'mobile',
			message	: 'mobile:'
		}]);

		var mobileRes = await qiao.dishi.sendCode(mobileAnswers.mobile);
		if(!mobileRes) return;

		var answers = await qiao.cli.ask([{
			type	: 'input',
			name	: 'code',
			message	: 'code:'
		},{
			type	: 'password',
			mask	: '*',
			name	: 'password',
			message	: 'password:'
		},{
			type	: 'password',
			mask	: '*',
			name	: 'repassword',
			message	: 'confirm password:'
		}]);

		await qiao.dishi.register(mobileAnswers.mobile, answers.password, answers.repassword, answers.code);
	}catch(e){
		qiao.log.danger(e.message);
	}
}