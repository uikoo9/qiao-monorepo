'use strict';

// config
import config from '../util/_server.json';

// fetch
import { postWithToken } from '../util/_fetch.js';

// qjson
import { danger } from 'qiao-json';

/**
 * todoGroupList
 */
export const todoGroupList = async () => {
	const url = config.host + config.todoGrouplist;
	const data = { rows: '10' };

	return await postWithToken(url, data);
};

/**
 * todoGroupSave
 */
export const todoGroupSave = async (name, id) => {
	const url = config.host + config.todoGroupSave;
	let data = {
		todoGroupName: name,
		todoGroupOrder: '1'
	};
	if (id) data.id = id;

	return await postWithToken(url, data);
};

/**
 * todoGroupDel
 */
export const todoGroupDel = async (ids) => {
	const url = config.host + config.todoGroupDel;
	const data = { ids: ids };

	return await postWithToken(url, data);
};

/**
 * todoGroupGet
 */
export const todoGroupGet = async (id) => {
	if (!id) return danger('need group id');

	const url = config.host + config.todoGroupGet;
	const data = { id: id };

	const json = await postWithToken(url, data);
	if (!json || !json.obj || !json.obj.rows || !json.obj.rows.length) {
		return danger(`can not find todo group by ${id}`);
	}

	var item = json.obj.rows[0];
	item.time = json.time;
	return item;
};