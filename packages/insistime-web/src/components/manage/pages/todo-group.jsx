'use strict';

// react
import React from 'react';

// ui
import {
    Table,
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
            cols: '',
            rows: ''
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
    init = () => {
        initData(this);
    }

    // modal show
    modalShow = () => {
        this.todoGroupModalRef.current.modalShow();

        console.log('insistime-web/manage/todo-group: modalShow');
    }

    editRow = (row) => {
        this.todoGroupModalRef.current.modalShow(row);
    }
    delRow = (id) => {
        todoGroupDel(this, id);
    }

    render() {
        console.log('insistime-web/manage/todo-page: render');

        return <div className="data-container">
            <button onClick={this.modalShow}>add</button>
            <Table
                cols={this.state.cols}
                rows={this.state.rows}
                editRow={this.editRow}
                delRow={this.delRow}
            />

            <ToDoGroupModal 
                ref={this.todoGroupModalRef}
                reload={this.init}
            />
        </div>;
    }
}