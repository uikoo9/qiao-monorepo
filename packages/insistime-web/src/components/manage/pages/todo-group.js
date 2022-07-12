// qiao
import { get } from 'qiao.cookie.js';

// dishi service
import { todoGroupList } from 'dishi-service';

/**
 * getCols
 * @returns cols
 */
export const getCols = () => {
    return [
        'id',
        'ucenter_user_id',
        'todo_group_name',
        'todo_group_order',
    ];
};

/**
 * getRows
 * @param {*} groupId 
 * @returns rows
 */
export const getRows = async (groupId) => {
    // userinfo
    window.insistime_userinfo = {
        userid: get('insistime_userid'),
        usertoken: get('insistime_usertoken')
    };

    // cols
    const cols = getCols();
    
    // rows
    const res = await todoGroupList();
    const resRows = res.obj.rows;
    return resRows.map((row, index) => {
        const keys = Object.keys(row);
        keys.forEach((key) => {
            if(!cols.includes(key)){
                delete row[key];
            }
        });

        return row;
    });
};