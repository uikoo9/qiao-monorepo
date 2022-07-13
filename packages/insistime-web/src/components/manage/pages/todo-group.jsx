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
    init,
    del,
} from './todo-group.js';

/**
 * todo group
 */
export class ToDoGroup extends React.Component {
    constructor(props) {
        console.log('insistime-web/manage/page/todo-group: constructor');

        super(props);

        this.state = {
            cks: [],
            cols: null,
            rows: null,
            sumpage: null,
            pagenumber: null,
        };

        this.todoGroupModalRef = React.createRef();
    }

    // init
    componentDidMount() {
        console.log('insistime-web/manage/page/todo-group: componentDidMount');

        this.reload();
    }

    // reload
    reload = (pagenumber) => {
        console.log('insistime-web/manage/page/todo-group: reload');

        init(this, pagenumber);
    }

    // edit row
    editRow = (row) => {
        console.log('insistime-web/manage/page/todo-group: editRow');

        this.todoGroupModalRef.current.modalShow(row);
    }

    // del row
    delRow = async (id) => {
        console.log('insistime-web/manage/page/todo-group: delRow');

        await del(id);
        this.reload();
    }

    // toolbar
    checkboxChange = (e) => {
        console.log('insistime-web/manage/page/todo-group: checkboxChange');

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
        console.log('insistime-web/manage/page/todo-group: render');

        return <div className="data-container">
            <Toolbar 
                cks={this.state.cks}
                modal={this.todoGroupModalRef}
                delRows={this.delRow}
                reload={this.reload}
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
                reload={this.reload}
            />
        </div>;
    }
}