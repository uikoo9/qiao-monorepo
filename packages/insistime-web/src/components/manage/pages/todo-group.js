// qiao
import { get } from 'qiao.cookie.js';

// dishi service
import {
    todoGroupList,
    todoGroupSave as save,
    todoGroupDel as del,
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
 * initData
 * @param {*} that 
 * @returns 
 */
export const initData = async (that, pagenumber) => {
    // userinfo
    window.insistime_userinfo = {
        userid: get('insistime_userid'),
        usertoken: get('insistime_usertoken')
    };

    // res
    const res = await todoGroupList(pagenumber, window.pagesize);
    console.log(res);
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

    // set
    that.setState({
        cols: cols,
        rows: rows,
        sumpage: res.obj.sumpage,
        total: res.obj.total,
        pagenumber: res.obj.pagenumber,
        pagesize: res.obj.pagesize,
    });
};

/**
 * todoGroupSave
 * @param {*} that 
 * @param {*} name 
 * @param {*} order 
 * @param {*} id 
 * @returns 
 */
export const todoGroupSave = async (that, name, order, id) => {
    const res = await save(name, order, id);
    if (!res || res.type != 'success') {
        that.setState({
            tips: res.msg
        });
        return;
    }

    that.modalClose();
    that.props.reload();
};

/**
 * todoGroupDel
 * @param {*} that 
 * @param {*} id 
 * @returns 
 */
export const todoGroupDel = async (that, id) => {
    const res = await del(`${id}`);
    if (!res || res.type != 'success') {
        alert(res.msg);
        return;
    }

    that.init();
};