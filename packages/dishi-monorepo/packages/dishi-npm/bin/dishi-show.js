'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao-cli');
qiao.dishi	= require('../src/dishi.js');

// cmd for show-----------------------------------------------------
qiao.cli.cmd
	.command('show [num]')
	.alias('s')
	.usage('[num]')
	.description('todo show')
	.action(show);

// show
function show(num){
	qiao.dishi.show(num);
}