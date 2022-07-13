// util
import {
    initData,
    itemSave,
    itemDel,
} from './util.js';

// dishi service
import {
    todoGroupList,
    todoGroupSave,
    todoGroupDel,
} from 'dishi-service';

// cols
const cols = [
    'ck',
    'id',
    'ucenter_user_id',
    'todo_group_name',
    'todo_group_order',
    'op'
];

/**
 * init
 * @param {*} that 
 * @returns 
 */
export const init = async (that, pagenumber) => {
    const obj = await initData(todoGroupList, pagenumber, cols);

    // set
    that.setState({
        cols: cols,
        rows: obj.rows,
        sumpage: obj.sumpage,
        pagenumber: obj.pagenumber,
    });
};

/**
 * save
 * @param {*} name 
 * @param {*} order 
 * @param {*} id 
 */
export const save = async (name, order, id) => {
    await itemSave(todoGroupSave, name, order, id);
};

/**
 * del
 * @param {*} ids 
 * @returns 
 */
export const del = async (ids) => {
    await itemDel(todoGroupDel, ids);
};