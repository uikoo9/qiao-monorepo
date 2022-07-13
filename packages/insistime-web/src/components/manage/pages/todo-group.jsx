'use strict';

// react
import React from 'react';

// ui
import {
    Table,
    Toolbar,
} from 'qiao-ui';

// modal
import { ToDoGroupModal } from './todo-group-modal.jsx';

// js
import {
    initData,
    todoGroupDel,
} from './todo-group.js';

/**
 * todo group
 */
export class ToDoGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cks: [],
            cols: null,
            rows: null,
            sumpage: null,
            total: null,
            pagenumber: null,
            pagesize: null,
        };

        this.todoGroupModalRef = React.createRef();

        console.log('insistime-web/manage/todo-group: constructor');
    }

    // init
    componentDidMount() {
        this.init();

        console.log('insistime-web/manage/todo-group: componentDidMount');
    }

    // init
    init = (pagenumber) => {
        initData(this, pagenumber);
    }

    // edit row
    editRow = (row) => {
        this.todoGroupModalRef.current.modalShow(row);
    }

    // del row
    delRow = async (id) => {
        await todoGroupDel(id);
        this.init();
    }

    // toolbar
    checkboxChange = (e) => {
        const cks = this.state.cks;

        if (e.target.checked) {
            cks.push(e.target.value);
        } else {
            const index = cks.indexOf(e.target.value);
            cks.splice(index, 1);
        }

        this.setState({
            cks: cks
        });
    }

    render() {
        console.log('insistime-web/manage/todo-page: render');

        return <div className="data-container">
            <Toolbar 
                cks={this.state.cks}
                modal={this.todoGroupModalRef}
                delRows={this.delRow}
                reload={this.init}
                sumpage={this.state.sumpage}
                pagenumber={this.state.pagenumber}
            />

            <Table
                cols={this.state.cols}
                rows={this.state.rows}
                editRow={this.editRow}
                delRow={this.delRow}
                checkboxChange={this.checkboxChange}
            />

            <ToDoGroupModal
                ref={this.todoGroupModalRef}
                reload={this.init}
            />
        </div>;
    }
}