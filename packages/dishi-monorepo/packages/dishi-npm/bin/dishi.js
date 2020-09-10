#!/usr/bin/env node

'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');
qiao.config	= require('qiao-config');
qiao.dishi	= require('../src/dishi.js');
qiao.log 	= require('../src/util/log.js');

// cmd for common
qiao.cli.cmd
	.version(require('../package.json').version, '-v, --version')
	.usage('<command> [options]');

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

// cmd for crud-----------------------------------------------------
// cmd for list
qiao.cli.cmd
	.command('list')
	.alias('l')
	.usage('[options]')
	.description('todo item list')
	.option('-g, --group', 'list todo groups')
	.action(list);

// cmd for add
qiao.cli.cmd
	.command('add <name>')
	.alias('a')
	.usage('<name> [options]')
	.description('todo item add')
	.option('-g, --group', 'add todo group')
	.action(add);

// cmd for update
qiao.cli.cmd
	.command('update <id> <name>')
	.alias('u')
	.usage('<id> <name> [options]')
	.description('todo item update')
	.option('-g, --group', 'update todo group')
	.action(update);

// cmd for del
qiao.cli.cmd
	.command('del <ids>')
	.alias('d')
	.usage('<ids> [options]')
	.description('todo item delete')
	.option('-g, --group', 'delete todo group')
	.action(del);

// cmd for operate-----------------------------------------------------
// cmd for done
qiao.cli.cmd
	.command('done <id>')
	.usage('<id> [options]')
	.description('todo item done')
	.action(done);

// cmd for move
qiao.cli.cmd
	.command('move <id> <groupId>')
	.alias('mv')
	.usage('<id> <groupId> [options]')
	.description('todo item move')
	.action(move);

// cmd for config-----------------------------------------------------
// cmd for use
qiao.cli.cmd
	.command('use <groupId>')
	.usage('<groupId>')
	.description('select todo group')
	.action(useGroupId);

// cmd for rows
qiao.cli.cmd
	.command('rows <rows>')
	.usage('<rows>')
	.description('set rows')
	.action(setRows);

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
		var userinfo = qiao.config.c('userinfo');
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
	var userinfo = qiao.config.c('userinfo');
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

// list
function list(options){
	qiao.dishi.list(options.group);
}

// add
function add(name, options){
	qiao.dishi.add(name, options.group);
}

// update
function update(id, name, options){
	qiao.dishi.update(id, name, options.group);
}

// del
function del(ids, options){
	qiao.dishi.del(ids, options.group);
}

// done
function done(id){
	qiao.dishi.done(id);
}

// move
function move(id, groupId){
	qiao.dishi.move(id, groupId);
}

// use group id
function useGroupId(id){
	qiao.dishi.use(id);
}

// set rows
function setRows(rows){
	qiao.dishi.rows(rows);
}