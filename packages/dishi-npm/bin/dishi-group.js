'use strict';

// qiao
var qiao = require('../src/util/qiao.js');

// dishi
var dishi = require('../src/dishi.js');

// cmd for group-----------------------------------------------------
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

// cmd for list
qiao.cli.cmd
	.command('group')
	.alias('g')
	.usage(' ')
	.description('todo group list')
	.action(list);

// list
function list() {
	dishi.list(true);
}

// add
function add(name) {
	dishi.add(name, true);
}

// update
function update(id, name) {
	dishi.update(id, name, true);
}

// del
function del(ids) {
	dishi.del(ids, true);
}