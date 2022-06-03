'use strict';

// qiao
var qiao = require('../src/util/qiao.js');

// dishi
var dishi = require('../src/dishi.js');

// cmd for config-----------------------------------------------------
// cmd for use
qiao.cli.cmd
	.command('use <groupId>')
	.usage('<groupId>')
	.description('select todo group')
	.action(useGroupId);

// cmd for rows
qiao.cli.cmd
	.command('rows <rows>')
	.usage('<rows>')
	.description('set rows')
	.action(setRows);

// use group id
function useGroupId(id) {
	dishi.use(id);
}

// set rows
function setRows(rows) {
	dishi.rows(rows);
}