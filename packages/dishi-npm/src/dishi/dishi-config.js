'use strict';

// qiao
var qiao = require('../util/qiao.js');
global.insistime_userinfo = qiao.config.config('userinfo');

// service
var dishiService = require('dishi-service');

/**
 * use
 */
exports.use = async function (id) {
	var item = await dishiService.todoGroupGet(id);
	if (!item) return;

	qiao.config.config('group', item);
	qiao.log.suc(`${item.time}ms | todo group use success`);
};

/**
 * rows
 */
exports.rows = async function (rows) {
	qiao.config.config('rows', rows);
	qiao.log.suc(`set rows to ${rows}`);
};