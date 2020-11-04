'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');
qiao.dishi	= require('../src/dishi.js');

// cmd for show-----------------------------------------------------
qiao.cli.cmd
	.command('show <num>')
	.usage('<num>')
	.description('todo item show')
	.action(show);

// show
function show(num){
	qiao.dishi.show(num);
}