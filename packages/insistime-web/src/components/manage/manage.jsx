'use strict';

// react
import React from 'react';

// css
import './manage.scss';

// ui
import {
    Header,
    Menus,
    Modal,
    Table
} from 'qiao-ui';

// js
import {
    getCols,
    getRows,
} from './manage.js';

/**
 * manage container
 */
export class ManageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cols: '',
            rows: '',
        };

        console.log('insistime-web/manage-container: constructor');
    }

    async componentDidMount(){
        // table
        const cols = getCols();
        const rows = await getRows('108');

        this.setState({
            cols: cols,
            rows: rows,
        });

        console.log('insistime-web/manage-container: componentDidMount');
    }

    onClick(){
        console.log(1);
    }

    render() {
        console.log('insistime-web/manage-container: render');

        return <div className="container">
            <Header
                logo={this.props.constant.logo}
                navs={this.props.constant.navs}
            />
            <div className="content">
                <Menus 
                    menus={this.props.constant.menus}
                />
                <div className="data-container">
                    <button onClick={this.onClick}>add</button>
                    <Table
                        cols={this.state.cols}
                        rows={this.state.rows}
                    />

                    <Modal/>
                </div>
            </div>
        </div>;
    }
}