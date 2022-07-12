'use strict';

// react
import React from 'react';

// ui
import {
    Modal,
    Table
} from 'qiao-ui';

// js
import {
    getCols,
    getRows,
} from './todo.js';

/**
 * todo
 */
export class ToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cols: '',
            rows: '',
            modalShow: false,
        };

        this.onClick = this.onClick.bind(this);
        this.modalClose = this.modalClose.bind(this);

        console.log('insistime-web/manage/todo-page: constructor');
    }

    async componentDidMount() {
        // table
        const cols = getCols();
        const rows = await getRows('108');

        this.setState({
            cols: cols,
            rows: rows,
        });

        console.log('insistime-web/manage/todo-page: componentDidMount');
    }

    onClick() {
        this.setState({
            modalShow: true
        });
    }

    modalClose() {
        this.setState({
            modalShow: false
        });
    }

    render() {
        console.log('insistime-web/manage/todo-page: render');

        return <div className="data-container">
            <button onClick={this.onClick}>add</button>
            <Table
                cols={this.state.cols}
                rows={this.state.rows}
            />

            <Modal
                modalShow={this.state.modalShow}
                modalClose={this.modalClose}
            >
                <div>1</div>
            </Modal>
        </div>;
    }
}