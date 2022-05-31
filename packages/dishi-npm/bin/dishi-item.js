'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao-cli');
qiao.dishi	= require('../src/dishi.js');

// cmd for item-----------------------------------------------------
// cmd for add
qiao.cli.cmd
	.command('add <name>')
	.usage('<name>')
	.description('todo item add')
	.action(add);

// cmd for update
qiao.cli.cmd
	.command('update <id> <name>')
	.usage('<id> <name>')
	.description('todo item update')
	.action(update);

// cmd for del
qiao.cli.cmd
	.command('del <ids>')
	.usage('<ids>')
	.description('todo item delete')
	.action(del);

// cmd for list
qiao.cli.cmd
	.command('list')
	.alias('l')
	.usage(' ')
	.description('todo item list')
	.action(list);

// list
function list(){
	qiao.dishi.list();
}

// add
function add(name){
	qiao.dishi.add(name);
}

// update
function update(id, name){
	qiao.dishi.update(id, name);
}

// del
function del(ids){
	qiao.dishi.del(ids);
}