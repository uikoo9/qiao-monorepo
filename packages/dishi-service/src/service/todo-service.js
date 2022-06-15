'use strict';

// config
import config from '../util/_server.json';

// fetch
import { postWithToken } from '../util/_fetch.js';

/**
 * todoList
 */
export const todoList = async (gid) => {
	const url = config.host + config.todoList;
	const data = {
		todoGroupId: gid,
		rows: '10'
	};

	return await postWithToken(url, data);
};