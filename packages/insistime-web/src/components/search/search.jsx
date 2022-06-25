'use strict';

// react
import React from 'react';

// css
import './search.scss';

// js
import { searchClick } from './search.js';

// ui
import { SearchBox } from 'qiao-ui';
import { CheckboxList } from 'qiao-ui';

/**
 * search container
 */
export class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkboxValues : [],
        };

        this.checkboxChange = this.checkboxChange.bind(this);
    }

    checkboxChange(isChecked, value){
        let checkboxValues = this.state.checkboxValues;
        if(isChecked){
            checkboxValues.push(value);
        }else{
            const index = checkboxValues.indexOf(value);
            checkboxValues.splice(index, 1);
        }

        this.setState({
            checkboxValues : checkboxValues
        });
    }

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
                checkboxChange = {this.checkboxChange}
            />
        </div>;
    }
}