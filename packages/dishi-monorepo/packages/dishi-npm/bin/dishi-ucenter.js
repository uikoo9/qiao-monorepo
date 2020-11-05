'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');
qiao.config	= require('qiao-config').c();
qiao.dishi	= require('../src/dishi.js');
qiao.log 	= require('../src/util/log.js');

// cmd for ucenter-----------------------------------------------------
// cmd for login
qiao.cli.cmd
	.command('login')
	.usage(' ')
	.description('login')
	.action(login);

// cmd for logout
qiao.cli.cmd
	.command('logout')
	.usage(' ')
	.description('logout')
	.action(logout);

// cmd for whoami
qiao.cli.cmd
	.command('whoami')
	.usage(' ')
	.description('whoami')
	.action(whoami);

// cmd for reg
qiao.cli.cmd
	.command('reg')
	.usage(' ')
	.description('register')
	.action(register);

// login
async function login(){
	try{
		var userinfo = qiao.config.config('userinfo');
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
	var userinfo = qiao.config.config('userinfo');
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