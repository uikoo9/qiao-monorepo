'use strict';

// qiao
var qiao = require('../src/util/qiao.js');

// dishi
var dishi = require('../src/dishi.js');

// cmd for operate-----------------------------------------------------
// cmd for done
qiao.cli.cmd
	.command('done <id>')
	.alias('d')
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

// done
function done(id) {
	dishi.done(id);
}

// move
function move(id, groupId) {
	dishi.move(id, groupId);
}