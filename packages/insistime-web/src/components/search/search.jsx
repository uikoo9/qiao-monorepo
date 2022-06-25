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
            checkboxValues : [],
        };

        this.searchClick = this.searchClick.bind(this);
        this.checkboxChange = this.checkboxChange.bind(this);
    }

    searchClick(value){
        searchClick(this, value);
    }

    checkboxChange(isChecked, value){
        checkboxChange(this, isChecked, value);
    }

    render() {
        return <div className="container">
            <SearchBox
                placeholder='all, express | npm, express'
                searchBtnText='Search'
                searchClick={this.searchClick}
            />
            <CheckboxList 
                text='all ='
                checkboxs = {[{
                    name : 'npm'
                },{
                    name : 'express'
                }]}
                checkboxChange = {this.checkboxChange}
            />
        </div>;
    }
}