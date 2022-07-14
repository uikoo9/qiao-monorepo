'use strict';

// config
import config from '../util/_server.json';

// fetch
import { postWithToken } from '../util/_fetch.js';

// qjson
import { danger } from 'qiao-json';

/**
 * ucenterMenuList
 * @param {*} pagenumber 
 * @param {*} pagesize 
 * @returns 
 */
export const ucenterMenuList = async (pagenumber, pagesize) => {
    const url = config.host + config.ucenterMenuList;
    const data = { 
        page: pagenumber || '1',
        rows: pagesize || '10' 
    };

    return await postWithToken(url, data);
};

/**
 * ucenterMenuSave
 * @param {*} data 
 * @returns 
 */
export const ucenterMenuSave = async (data) => {
    const url = config.host + config.ucenterMenuSave;
    let opt = {
        ucenterMenuParent: data.ucenter_menu_parent,
        ucenterMenuSn: data.ucenter_menu_sn,
        ucenterMenuTitle: data.ucenter_menu_title,
        ucenterMenuUrl: data.ucenter_menu_url
    };
    if (data.id) opt.id = data.id;

    return await postWithToken(url, opt);
};

/**
 * ucenterMenuDel
 * @param {*} ids 
 * @returns 
 */
export const ucenterMenuDel = async (ids) => {
    const url = config.host + config.ucenterMenuDel;
    const data = { ids: ids };

    return await postWithToken(url, data);
};

/**
 * ucenterMenuGet
 * @param {*} id 
 * @returns 
 */
export const ucenterMenuGet = async (id) => {
    if (!id) return danger('need id');

    const url = config.host + config.ucenterMenuGet;
    const data = { id: id };

    const json = await postWithToken(url, data);
    if (!json || !json.obj || !json.obj.rows || !json.obj.rows.length) {
        return danger(`can not find item by ${id}`);
    }

    var item = json.obj.rows[0];
    item.time = json.time;
    return item;
};