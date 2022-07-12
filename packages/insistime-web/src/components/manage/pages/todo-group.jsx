'use strict';

// react
import React from 'react';

// ui
import {
    Modal,
    Table,
    Input,
    Button,
} from 'qiao-ui';

// js
import {
    getCols,
    getRows,
    todoGroupAdd,
} from './todo-group.js';

/**
 * todo group
 */
export class ToDoGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cols: '',
            rows: '',
            modalShow: false,
            todo_group_name: '',
            todo_group_order: '',
        };

        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.todoGroupNameChange = this.todoGroupNameChange.bind(this);
        this.todoGroupOrderChange = this.todoGroupOrderChange.bind(this);
        this.todoGroupAddClick = this.todoGroupAddClick.bind(this);

        console.log('insistime-web/manage/todo-page: constructor');
    }

    // init
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

    // modal
    modalShow() {
        this.setState({
            modalShow: true
        });
    }
    modalClose() {
        this.setState({
            modalShow: false
        });
    }

    // form
    todoGroupNameChange(e){
        this.setState({
            todo_group_name: e.target.value
        });
    }
    todoGroupOrderChange(e){
        this.setState({
            todo_group_order: e.target.value
        });
    }
    todoGroupAddClick(){
        const todo_group_name = this.state.todo_group_name;
        const todo_group_order = this.state.todo_group_order;
        todoGroupAdd(this, todo_group_name);
    }

    render() {
        console.log('insistime-web/manage/todo-page: render');

        return <div className="data-container">
            <button onClick={this.modalShow}>add</button>
            <Table
                cols={this.state.cols}
                rows={this.state.rows}
            />

            <Modal
                modalShow={this.state.modalShow}
                modalClose={this.modalClose}
            >
                <Input 
                    type="text" 
                    placeholder="todo_group_name"
                    value={this.state.todo_group_name}
                    onChange={this.todoGroupNameChange}
                />
                <Input 
                    type="text" 
                    placeholder="todo_group_order"
                    value={this.state.todo_group_order}
                    onChange={this.todoGroupOrderChange}
                />
                <Button
                    onClick={this.todoGroupAddClick}
                    text="submit"
                />
            </Modal>
        </div>;
    }
}