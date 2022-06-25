'use strict';

// react
import React from 'react';

// css
import './search.scss';

// js
import { searchClick } from './search.js';

// ui
import { SearchBox } from 'qiao-ui';
import { CheckboxList } from './checkbox-list/checkbox-list.jsx';

/**
 * search container
 */
export class SearchContainer extends React.Component {
    render() {
        return <div className="container">
            <SearchBox
                placeholder='all, express | npm, express'
                searchBtnText='Search'
                searchClick={searchClick}
            />
            <CheckboxList 
                text='all ='
                checkboxs = {[{
                    name : 'npm'
                },{
                    name : 'express'
                }]}
            />
        </div>;
    }
}