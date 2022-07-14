// react
import React from 'react';

// qiao
import { get } from 'qiao.cookie.js';

// ui
import { Grid, gridInit, gridDel } from 'qiao-ui';

// dishi service
import { ucenterMenuList, ucenterMenuDel } from 'qiao-service';

// components
import { UcenterMenuModal } from './ucenter-menu-modal.jsx';

// cols
const cols = [
    'ck',
    'id',
    'ucenter_menu_parent',
    'ucenter_menu_sn',
    'ucenter_menu_title',
    'ucenter_menu_url',
    'op'
];

/**
 * ucenter menu
 */
export class UcenterMenu extends React.Component {
    // init
    init = async (that, pagenumber) => {
        // userinfo
        window.insistime_userinfo = {
            userid: get('insistime_userid'),
            usertoken: get('insistime_usertoken')
        };

        // set
        const obj = await gridInit(ucenterMenuList, pagenumber, cols);
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
        return await gridDel(ucenterMenuDel, ids);
    }

    render() {
        console.log('insistime-web/manage/page/ucenter-menu: render');

        return <Grid
            init={this.init}
            del={this.del}
            modal={UcenterMenuModal}
        />;
    }
}