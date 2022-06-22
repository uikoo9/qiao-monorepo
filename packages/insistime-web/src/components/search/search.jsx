'use strict';

// react
import React from 'react';

// css
import './search.scss';

// ui
import {
    Header,
    Menus,
    Table
} from 'qiao-ui';

// js
import {
    getCols,
    getRows,
} from './search.js';

/**
 * search container
 */
export class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cols: '',
            rows: '',
        };
    }

    async componentDidMount(){
        // table
        const cols = getCols();
        const rows = await getRows('108');

        this.setState({
            cols: cols,
            rows: rows,
        });
    }

    render() {
        return <div className="container">
            <div className="search-container">
                <div className="search-input">
                    <div className="input">
                        <input type="text" placeholder='all, express | npm, express'/>
                    </div>
                    <div className="button">search</div>
                </div>
                <div className="search-checkbox">

                </div>
            </div>
        </div>;
    }
}