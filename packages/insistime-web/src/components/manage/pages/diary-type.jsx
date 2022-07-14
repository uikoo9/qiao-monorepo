// react
import React from 'react';

// qiao
import { get } from 'qiao.cookie.js';

// ui
import { Grid, gridInit, gridDel } from 'qiao-ui';

// dishi service
import { diaryTypeList, diaryTypeDel } from 'dishi-service';

// components
import { DiaryTypeModal } from './diary-type-modal.jsx';

// cols
const cols = [
    'ck',
    'id',
    'diary_type_name',
    
    'op'
];

/**
 * diary type
 */
export class DiaryType extends React.Component {
    // init
    init = async (that, pagenumber) => {
        // userinfo
        window.insistime_userinfo = {
            userid: get('insistime_userid'),
            usertoken: get('insistime_usertoken')
        };

        // set
        const obj = await gridInit(diaryTypeList, pagenumber, cols);
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
        return await gridDel(diaryTypeDel, ids);
    }

    render() {
        console.log('insistime-web/manage/page/diary-type: render');

        return <Grid
            init={ this.init }
            del={ this.del }
            modal={ DiaryTypeModal }
        />;
    }
}