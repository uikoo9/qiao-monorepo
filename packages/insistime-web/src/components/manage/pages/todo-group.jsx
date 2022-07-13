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
    init = () => {
        initData(this);
    }

    // modal show
    modalShow = () => {
        this.todoGroupModalRef.current.modalShow();

        console.log('insistime-web/manage/todo-group: modalShow');
    }

    // ck
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

    // del rows
    delRows = () => {
        const cks = this.state.cks;
        if (!cks.length) {
            alert('check del rows');
            return;
        }

        todoGroupDel(this, cks.join(','));
    }

    // edit row
    editRow = (row) => {
        this.todoGroupModalRef.current.modalShow(row);
    }

    // del row
    delRow = (id) => {
        todoGroupDel(this, id);
    }

    // paging
    firstPage = () => {
        initData(this);
    }
    lastPage = () => {
        initData(this, this.state.sumpage);
    }
    prevPage = () => {
        const pagenumber = this.state.pagenumber;
        if (pagenumber == 1) return;

        initData(this, pagenumber - 1);
    }
    nextPage = () => {
        const pagenumber = this.state.pagenumber;
        if (pagenumber == this.state.sumpage) return;

        initData(this, pagenumber + 1);
    }
    setPagesize = (pagesize) => {
        window.pagesize = pagesize;
        initData(this);
    }

    render() {
        console.log('insistime-web/manage/todo-page: render');

        // paging
        const sumpage = this.state.sumpage;
        const total = this.state.total;
        const pagenumber = this.state.pagenumber;
        const pagesize = this.state.pagesize;

        return <div className="data-container">
            <div className='toolbar'>
                <div onClick={this.modalShow}>add</div>
                <div onClick={this.delRows}>del</div>
                <div>/</div>
                <div onClick={this.firstPage}>first</div>
                <div onClick={this.prevPage}>prev</div>
                <div onClick={this.nextPage}>next</div>
                <div onClick={this.lastPage}>last</div>
                <div>/</div>
                <div onClick={() => { this.setPagesize(10) }}>10</div>
                <div onClick={() => { this.setPagesize(50) }}>50</div>
                <div onClick={() => { this.setPagesize(100) }}>100</div>
            </div>

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