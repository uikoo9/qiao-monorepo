'use strict';

// qiao
var qiao 	= {};
qiao.config	= require('qiao-config').c();
qiao.log	= require('../util/log.js');

// service
var todoGroupService = require('../service/todo-group-service');

/**
 * use
 */
exports.use = async function(id){
	var item = await todoGroupService.get(id);
	if(!item) return;

	qiao.config.config('group', item);
	qiao.log.suc(`${item.time}ms | todo group use success`);
};

/**
 * rows
 */
exports.rows = async function(rows){
	qiao.config.config('rows', rows);
	qiao.log.suc(`set rows to ${rows}`);
};