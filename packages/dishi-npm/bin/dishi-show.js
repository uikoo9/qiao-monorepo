'use strict';

// qiao
var qiao = require('../src/util/qiao.js');

// dishi
var dishi = require('../src/dishi.js');

// cmd for show-----------------------------------------------------
qiao.cli.cmd
	.command('show [num]')
	.alias('s')
	.usage('[num]')
	.description('todo show')
	.action(show);

// show
function show(num) {
	dishi.show(num);
}