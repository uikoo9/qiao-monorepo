'use strict';

// qiao
var qiao 	= {};
qiao.cli 	= require('qiao.plugin.cli');
qiao.dishi	= require('../src/dishi.js');

// cmd for show-----------------------------------------------------
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
function useGroupId(id){
	qiao.dishi.use(id);
}

// set rows
function setRows(rows){
	qiao.dishi.rows(rows);
}