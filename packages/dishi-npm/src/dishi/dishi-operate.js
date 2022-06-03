'use strict';

// qiao
var qiao = {};
qiao.config = require('qiao-config').c();
qiao.log = require('../util/log.js');
global.insistime_userinfo = qiao.config.config('userinfo');

// service
var dishiService = require('dishi-service');

/**
 * done
 */
exports.done = async function (id) {
	// get item
	var item = await dishiService.todoItemGet(id);
	if (!item) return;

	// update item
	var json = await dishiService.todoItemSave(item.todo_item_name, id, item.todo_group_id, item.todo_item_order, '1');
	if (!json) return;

	// suc
	qiao.log.suc(`${json.time + item.time}ms | done success`);
};

/**
 * move
 */
exports.move = async function (id, groupId) {
	// get group
	var group = await dishiService.todoGroupGet(groupId);
	if (!group) return;

	// get item
	var item = await dishiService.todoItemGet(id);
	if (!item) return;

	// update item
	var json = await dishiService.todoItemSave(item.todo_item_name, id, groupId, item.todo_item_order, item.todo_group_status);
	if (!json) return;

	// suc
	qiao.log.suc(`${json.time + item.time}ms | move success`);
};