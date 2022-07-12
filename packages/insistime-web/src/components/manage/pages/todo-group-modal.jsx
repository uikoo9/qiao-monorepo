'use strict';

// react
import React from 'react';

// ui
import {
    Modal,
    Input,
    Button,
} from 'qiao-ui';

// js
import {
    todoGroupSave,
} from './todo-group.js';

/**
 * todo group modal
 */
export class ToDoGroupModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            todo_group_name: '',
            todo_group_order: '',
        };

        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.todoGroupNameChange = this.todoGroupNameChange.bind(this);
        this.todoGroupOrderChange = this.todoGroupOrderChange.bind(this);
        this.todoGroupAddClick = this.todoGroupAddClick.bind(this);

        console.log('insistime-web/manage/todo-group-modal: constructor');
    }

    // modal
    modalShow(){
        this.setState({
            show: true,
            todo_group_name: '',
            todo_group_order: '',
        });
    }
    modalClose() {
        this.setState({
            show: false
        });
    }

    // form
    todoGroupNameChange(e) {
        this.setState({
            todo_group_name: e.target.value
        });
    }
    todoGroupOrderChange(e) {
        this.setState({
            todo_group_order: e.target.value
        });
    }
    todoGroupAddClick() {
        const todo_group_name = this.state.todo_group_name;
        const todo_group_order = this.state.todo_group_order;
        todoGroupSave(this, todo_group_name, todo_group_order);
    }

    render() {
        console.log('insistime-web/manage/todo-page: render');

        return <Modal
            show={this.state.show}
            closeModal={this.modalClose}
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
        </Modal>;
    }
}