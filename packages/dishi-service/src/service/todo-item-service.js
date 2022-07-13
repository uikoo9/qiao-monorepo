// config
import config from '../util/_server.json';

// fetch
import { postWithToken } from '../util/_fetch.js';

// qjson
import { danger } from 'qiao-json';

/**
 * todoItemList
 * @param {*} pagenumber 
 * @param {*} pagesize 
 * @returns 
 */
export const todoItemList = async (pagenumber, pagesize) => {
    const url = config.host + config.todoItemlist;
    const data = {
        page: pagenumber || '1',
        rows: pagesize || '10' 
    };

    return await postWithToken(url, data);
};

/**
 * todoItemSave
 * @param {*} data 
 * @returns 
 */
export const todoItemSave = async (data) => {
    const url = config.host + config.todoItemSave;
    let opt = {
        todoGroupId: data.todo_group_id,
        todoItemName: data.todo_item_name,
        todoItemOrder: data.todo_item_order || '1',
        todoItemStatus: data.todo_item_status || '0'
    };
    if (data.id) opt.id = data.id;

    return await postWithToken(url, opt);
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