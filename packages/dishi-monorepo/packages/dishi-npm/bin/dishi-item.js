'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');
qiao.dishi	= require('../src/dishi.js');

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