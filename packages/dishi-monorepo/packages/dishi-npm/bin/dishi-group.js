'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');
qiao.dishi	= require('../src/dishi.js');

// cmd for crud-----------------------------------------------------
// cmd for list
qiao.cli.cmd
	.command('group')
	.alias('g')
	.usage(' ')
	.description('todo group list')
	.action(list);

// cmd for add
qiao.cli.cmd
	.command('group-add <name>')
	.alias('ga')
	.usage('<name>')
	.description('todo group add')
	.action(add);

// cmd for update
qiao.cli.cmd
	.command('group-update <id> <name>')
	.alias('gu')
	.usage('<id> <name>')
	.description('todo group update')
	.action(update);

// cmd for del
qiao.cli.cmd
	.command('group-del <ids>')
	.alias('gd')
	.usage('<ids>')
	.description('todo group delete')
	.action(del);

// list
function list(){
	qiao.dishi.list(true);
}

// add
function add(name){
	qiao.dishi.add(name, true);
}

// update
function update(id, name){
	qiao.dishi.update(id, name, true);
}

// del
function del(ids){
	qiao.dishi.del(ids, true);
}