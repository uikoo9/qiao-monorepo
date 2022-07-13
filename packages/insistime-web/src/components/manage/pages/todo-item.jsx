// react
import React from 'react';

// qiao
import { get } from 'qiao.cookie.js';

// ui
import { Grid, gridInit, gridDel } from 'qiao-ui';

// dishi service
import { todoItemList, todoItemDel } from 'dishi-service';

// components
import { ToDoItemModal } from './todo-item-modal.jsx';

// cols
const cols = [
    'ck',
    'id',
    'ucenter_user_id',
    'todo_group_id',
    'todo_item_name',
    'todo_item_order',
    'todo_item_status',
    'op'
];

/**
 * todo item
 */
export class ToDoItem extends React.Component {
    // init
    init = async (that, pagenumber) => {
        // userinfo
        window.insistime_userinfo = {
            userid: get('insistime_userid'),
            usertoken: get('insistime_usertoken')
        };

        // set
        const obj = await gridInit(todoItemList, pagenumber, cols);
        if(!obj) return;

        that.setState({
            cols: cols,
            rows: obj.rows,
            sumpage: obj.sumpage,
            pagenumber: obj.pagenumber,
        });
    }

    // del
    del = async (ids) => {
        return await gridDel(todoItemDel, ids);
    }

    render() {
        console.log('insistime-web/manage/page/todo-group: render');

        return <Grid
            init={this.init}
            del={this.del}
            modal={ToDoItemModal}
        />;
    }
}