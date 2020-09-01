'use strict';

// qiao
var qiao 	= {};
qiao.config	= require('qiao-config');
qiao.log	= require('../util/log.js');

// service
var todoGroupService = require('../service/todo-group-service');

/**
 * use
 */
exports.use = async function(id){
	var item = await todoGroupService.get(id);
	if(!item) return;

	qiao.config.c('groupId', id);
	qiao.log.suc(`${item.time}ms | todo group use success`);
};