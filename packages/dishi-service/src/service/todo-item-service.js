'use strict';

// config
import config from '../util/_server.json';

// fetch
import { postWithToken } from '../util/_fetch.js';

// qjson
import { danger } from 'qiao-json';

/**
 * todoItemList
 */
export const todoItemList = async (gid) => {
	const url = config.host + config.todoList;
	const data = {
		todoGroupId: gid,
		rows: '10'
	};

	return await postWithToken(url, data);
};

/**
 * todoItemSave
 */
export const todoItemSave = async (name, id, groupId, order, status) => {
	const url = config.host + config.todoItemSave;
	let data = {
		todoGroupId: groupId,
		todoItemName: name,
		todoItemOrder: order || '1',
		todoItemStatus: status || '0'
	};
	if (id) data.id = id;

	return await postWithToken(url, data);
};

/**
 * todoItemDel
 */
export const todoItemDel = async (ids) => {
	const url = config.host + config.todoItemDel;
	const data = { ids: ids };

	return await postWithToken(url, data);
};

/**
 * todoItemGet
 */
export const todoItemGet = async (id) => {
	if (!id) return danger('need item id');

	const url = config.host + config.todoItemGet;
	const data = { id: id };

	const json = await postWithToken(url, data);
	if (!json || !json.obj || !json.obj.rows || !json.obj.rows.length) {
		return danger(`can not find todo item by ${id}`);
	}

	let item = json.obj.rows[0];
	item.time = json.time;
	return item;
};