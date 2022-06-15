// dishi service
import { todoItemList } from 'dishi-service';

/**
 * getCols
 * @returns cols
 */
export const getCols = () => {
    return [
        'id',
        'ucenter_user_id',
        'todo_group_id',
        'todo_item_name',
        'todo_item_order',
        'todo_item_status',
    ];
};

/**
 * getRows
 * @param {*} groupId 
 * @returns rows
 */
export const getRows = async (groupId) => {
    const userid = '1';
    const usertoken = '/waCtX7d2el7WTE0fiVS29h9G8IMMaVYLA+6BgNKUW0zJ1iud3LmLOQov1pT5yzE';
    const insistime_userinfo = {
        userid: userid,
        usertoken: usertoken
    };
    window.insistime_userinfo = insistime_userinfo;

    const cols = getCols();
    
    const res = await todoItemList(groupId);
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

    console.log(rows);
    return rows;
};