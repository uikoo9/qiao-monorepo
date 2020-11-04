'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');
qiao.dishi	= require('../src/dishi.js');

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

// cmd for show
qiao.cli.cmd
	.command('show <num>')
	.usage('<num>')
	.description('todo item show')
	.action(show);

// done
function done(id){
	qiao.dishi.done(id);
}

// move
function move(id, groupId){
	qiao.dishi.move(id, groupId);
}

// show
function show(num){
	qiao.dishi.show(num);
}