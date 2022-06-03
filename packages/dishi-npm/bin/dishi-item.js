'use strict';

// qiao
var qiao = require('../src/util/qiao.js');

// dishi
var dishi = require('../src/dishi.js');

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
function list() {
	dishi.list();
}

// add
function add(name) {
	dishi.add(name);
}

// update
function update(id, name) {
	dishi.update(id, name);
}

// del
function del(ids) {
	dishi.del(ids);
}