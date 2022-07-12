// qiao
import { get } from 'qiao.cookie.js';

// dishi service
import { 
    todoGroupList,
    todoGroupSave as save,
} from 'dishi-service';

// cols
const cols = [
    'id',
    'ucenter_user_id',
    'todo_group_name',
    'todo_group_order',
];

/**
 * initData
 * @param {*} that 
 * @returns 
 */
export const initData = async (that) => {
    // userinfo
    window.insistime_userinfo = {
        userid: get('insistime_userid'),
        usertoken: get('insistime_usertoken')
    };

    // res
    const res = await todoGroupList();
    if(res.type != 'success'){
        console.error(res);
        return;
    }

    // rows
    const resRows = res.obj.rows;
    const rows = resRows.map((row, index) => {
        const keys = Object.keys(row);
        keys.forEach((key) => {
            if(!cols.includes(key)){
                delete row[key];
            }
        });

        return row;
    });

    // set
    that.setState({
        cols: cols,
        rows: rows,
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
    const res = await save(name, order);
    if(!res || res.type != 'success'){
        alert(res.msg);
        return;
    }

    alert(res.msg);
    that.setState({
        modalShow: false
    });

    initData(that);
};