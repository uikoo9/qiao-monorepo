'use strict';

// config
import config from '../util/_server.json';

// fetch
import { postWithToken } from '../util/_fetch.js';

// qjson
import { danger } from 'qiao-json';

/**
 * todoGroupList
 * @param {*} pagenumber 
 * @param {*} pagesize 
 * @returns 
 */
export const todoGroupList = async (pagenumber, pagesize) => {
	const url = config.host + config.todoGrouplist;
	const data = { 
        page: pagenumber || '1',
        rows: pagesize || '10' 
    };

	return await postWithToken(url, data);
};

/**
 * todoGroupSave
 * @param {*} name 
 * @param {*} order 
 * @param {*} id 
 * @returns 
 */
export const todoGroupSave = async (name, order, id) => {
	const url = config.host + config.todoGroupSave;
	let data = {
		todoGroupName: name,
		todoGroupOrder: order || '1'
	};
	if (id) data.id = id;

	return await postWithToken(url, data);
};

/**
 * todoGroupDel
 * @param {*} ids 
 * @returns 
 */
export const todoGroupDel = async (ids) => {
	const url = config.host + config.todoGroupDel;
	const data = { ids: ids };

	return await postWithToken(url, data);
};

/**
 * todoGroupGet
 * @param {*} id 
 * @returns 
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