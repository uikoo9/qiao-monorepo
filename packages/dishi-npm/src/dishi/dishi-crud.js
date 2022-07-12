'use strict';

// b
var b = require('../util/b.js');

// qiao
var qiao = require('../util/qiao.js');
global.insistime_userinfo = qiao.config.config('userinfo');

// service
var dishiService = require('dishi-service');

/**
 * list
 */
exports.list = async function (group) {
	if (group) {
		var json = await dishiService.todoGroupList();
		if (!json) return;

		qiao.log.suc(`${json.time}ms | list group success`);
		listGroups(json.obj.rows);
	} else {
		var groupId = b.getGroupId();
		if (!groupId) return;

		var json = await dishiService.todoList(groupId);
		if (!json) return;

		qiao.log.suc(`${json.time}ms | list todo success`);
		listTodos(json.obj);
	}
};

/**
 * add
 */
exports.add = async function (name, group) {
	if (group) {
		var json = await dishiService.todoGroupSave(name);
		if (!json) return;

		qiao.log.suc(`${json.time}ms | add group success`);
	} else {
		var groupId = b.getGroupId();
		if (!groupId) return;

		var json = await dishiService.todoItemSave(name, null, groupId);
		if (!json) return;

		qiao.log.suc(`${json.time}ms | add todo success`);
	}
};

/**
 * update
 */
exports.update = async function (id, name, group) {
	if (group) {
		var json = await dishiService.todoGroupSave(name, '1', id);
		if (!json) return;

		qiao.log.suc(`${json.time}ms | update group success`);
	} else {
		var groupId = b.getGroupId();
		if (!groupId) return;

		var json = await dishiService.todoItemSave(name, id, groupId);
		if (!json) return;

		qiao.log.suc(`${json.time}ms | update todo success`);
	}
};

/**
 * del
 */
exports.del = async function (ids, group) {
	if (group) {
		var idss = ids.split(',');
		if (idss.includes('1')) {
			qiao.log.danger('can note delete default group');
			return;
		}

		var json = await dishiService.todoGroupDel(ids);
		if (!json) return;

		qiao.log.suc(`${json.time}ms | delete group success`);
	} else {
		var json = await dishiService.todoItemDel(ids);
		if (!json) return;

		qiao.log.suc(`${json.time}ms | delete todo success`);
	}
};

// list groups
function listGroups(rows) {
	qiao.log.normal();
	qiao.log.info(`id	group-name`);

	for (var i = 0; i < rows.length; i++) {
		var item = rows[i];
		qiao.log.normal(`${item.id}	${item.todo_group_name}`);
	}
}

// list todos
function listTodos(obj) {
	var group = b.getGroup();
	if (!group) return;

	qiao.log.normal();
	qiao.log.info('========================');
	qiao.log.info(`todo group '${group.todo_group_name}[${group.id}]'`);
	qiao.log.info('========================');
	qiao.log.normal();

	var todoRows = obj.todoRows;
	qiao.log.danger(`todo items`);
	qiao.log.danger('------------------------');
	for (var i = 0; i < todoRows.length; i++) {
		var item = todoRows[i];
		qiao.log.normal(`${item.id}	${item.todo_item_name}`);
	}
	qiao.log.normal();

	var doneRows = obj.doneRows;
	qiao.log.suc(`done items`);
	qiao.log.suc('------------------------');
	for (var i = 0; i < doneRows.length; i++) {
		var item = doneRows[i];
		qiao.log.normal(`${item.id}	${item.todo_item_name}`);
	}
}