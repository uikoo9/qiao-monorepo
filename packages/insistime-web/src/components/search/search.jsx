'use strict';

// react
import React from 'react';

// css
import './search.scss';

// js
import { 
    searchClick,
    checkboxChange,
} from './search.js';

// ui
import { 
    SearchBox,
    CheckboxList,
} from 'qiao-ui';

/**
 * search container
 */
export class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkboxValues : ['npm'],
            searchRes: {},
        };

        this.searchClick = this.searchClick.bind(this);
        this.checkboxChange = this.checkboxChange.bind(this);
    }

    componentDidMount(){
        location.href = 'mqqapi://miniapp/open?_atype=0&_mappid=1109523715&_miniapptype=1&_mvid=&_path=pages%2Fauth%2Fauth%3Fa%3D12345668%26c%3Dauh-N5dG_078jlPGhXZ7pWeu&_vt=1&referer=2014&via=xsj_qqmusic&_sig=61078427';
    }

    searchClick(value){
        searchClick(this, value);
    }

    checkboxChange(isChecked, value){
        checkboxChange(this, isChecked, value);
    }

    render() {
        const searchRes = this.state.searchRes;
        const searchResKeys = Object.keys(searchRes);
        const searchList = searchResKeys && searchResKeys.map((skey, index) => {
            const searchResList = searchRes[skey];
            const searchResItems = searchResList && searchResList.map((item, j) => {
                return <div key={j}>{item.name}</div>
            });

            return <div key={index}>
                {searchResItems}
            </div>
        });

        return <div className="container">
            <SearchBox
                placeholder='all, express | npm, express'
                searchBtnText='Search'
                searchClick={this.searchClick}
            />
            <CheckboxList 
                text='all ='
                checkboxs = {[{
                    name : 'npm',
                    checked : true,
                },{
                    name : 'express',
                }]}
                checkboxChange = {this.checkboxChange}
            />
            <div className='search-list'>{searchList}</div>
        </div>;
    }
}