// qiao
import { get } from 'qiao.cookie.js';

/**
 * initData
 * @param {*} listFunc 
 * @param {*} pagenumber 
 * @param {*} cols 
 * @returns 
 */
export const initData = async (listFunc, pagenumber, cols) => {
    // userinfo
    window.insistime_userinfo = {
        userid: get('insistime_userid'),
        usertoken: get('insistime_usertoken')
    };

    // res
    const res = await listFunc(pagenumber, window.pagesize);
    if (res.type != 'success') {
        console.error(res);
        return;
    }

    // rows
    const resRows = res.obj.rows;
    const rows = resRows.map((row, index) => {
        // ck
        const defaultRow = cols.includes('ck') ? { ck: true } : {};
        const finalRow = Object.assign(defaultRow, row);

        // other
        const keys = Object.keys(finalRow);
        keys.forEach((key) => {
            if (!cols.includes(key)) {
                delete finalRow[key];
            }
        });

        // op
        if (cols.includes('op')) {
            finalRow.op = true;
        }

        return finalRow;
    });

    return {
        rows: rows,
        sumpage: res.obj.sumpage,
        pagenumber: res.obj.pagenumber,
    };
};

/**
 * itemSave
 * @param {*} saveFunc 
 * @param {*} name 
 * @param {*} order 
 * @param {*} id 
 * @returns 
 */
export const itemSave = async (saveFunc, name, order, id) => {
    const res = await saveFunc(name, order, id);
    if (!res || res.type != 'success') {
        that.setState({
            tips: res.msg
        });
        return;
    }
};

/**
 * itemDel
 * @param {*} delFunc 
 * @param {*} ids 
 * @returns 
 */
export const itemDel = async (delFunc, ids) => {
    const res = await delFunc(`${ids}`);
    if (!res || res.type != 'success') {
        alert(res.msg);
        return;
    }
}