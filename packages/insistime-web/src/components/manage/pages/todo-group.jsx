// react
import React from 'react';

// qiao
import { get } from 'qiao.cookie.js';

// ui
import { Grid, gridInit, gridDel } from 'qiao-ui';

// dishi service
import { todoGroupList, todoGroupDel } from 'dishi-service';

// components
import { ToDoGroupModal } from './todo-group-modal.jsx';

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
 * todo group
 */
export class ToDoGroup extends React.Component {
    // init
    init = async (that, pagenumber) => {
        // userinfo
        window.insistime_userinfo = {
            userid: get('insistime_userid'),
            usertoken: get('insistime_usertoken')
        };

        // set
        const obj = await gridInit(todoGroupList, pagenumber, cols);
        that.setState({
            cols: cols,
            rows: obj.rows,
            sumpage: obj.sumpage,
            pagenumber: obj.pagenumber,
        });
    }

    // del
    del = async (ids) => {
        await gridDel(todoGroupDel, ids);
    }

    render() {
        console.log('insistime-web/manage/page/todo-group: render');

        return <Grid
            init={this.init}
            del={this.del}
            modal={ToDoGroupModal}
        />;
    }
}