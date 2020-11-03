'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');
qiao.dishi	= require('../src/dishi.js');

// cmd for item-----------------------------------------------------
// cmd for list
qiao.cli.cmd
	.command('list')
	.alias('l')
	.usage(' ')
	.description('todo item list')
	.action(list);

// cmd for add
qiao.cli.cmd
	.command('add <name>')
	.alias('a')
	.usage('<name>')
	.description('todo item add')
	.action(add);

// cmd for update
qiao.cli.cmd
	.command('update <id> <name>')
	.alias('u')
	.usage('<id> <name>')
	.description('todo item update')
	.action(update);

// cmd for del
qiao.cli.cmd
	.command('del <ids>')
	.alias('d')
	.usage('<ids>')
	.description('todo item delete')
	.action(del);

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