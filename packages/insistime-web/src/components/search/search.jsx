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
    SearchList,
} from 'qiao-ui';

/**
 * search container
 */
export class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkboxValues: ['npm'],
            searchRes: {},
        };

        console.log('insistime-web/search-container: constructor');
    }

    searchClick = (value) => {
        searchClick(this, value);

        console.log('insistime-web/search-container: searchClick');
    }

    checkboxChange = (isChecked, value) => {
        checkboxChange(this, isChecked, value);

        console.log('insistime-web/search-container: checkboxChange');
    }

    render() {
        console.log('insistime-web/search-container: render');

        return <div className="container">
            <SearchBox
                placeholder='all, express | npm, express'
                searchBtnText='Search'
                searchClick={this.searchClick}
            />
            <CheckboxList
                text='all ='
                checkboxs={[{
                    name: 'npm',
                    checked: true,
                }, {
                    name: 'express',
                }]}
                checkboxChange={this.checkboxChange}
            />
            <SearchList
                searchRes={this.state.searchRes}
            />
        </div>;
    }
}