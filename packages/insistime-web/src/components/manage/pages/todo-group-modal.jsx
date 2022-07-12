'use strict';

// react
import React from 'react';

// ui
import {
    Modal,
    Input,
    Button,
    Tips,
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
            id: '',
            todo_group_name: '',
            todo_group_order: '',
            tips: '',
        };

        console.log('insistime-web/manage/todo-group-modal: constructor');
    }

    // modal
    modalShow = (row) => {
        const id = row && row.id;
        const todo_group_name = row && row.todo_group_name;
        const todo_group_order = row && row.todo_group_order;

        this.setState({
            show: true,
            id: id || '',
            todo_group_name: todo_group_name || '',
            todo_group_order: todo_group_order || '',
            tips: '',
        });
    }
    modalClose = () => {
        this.setState({
            show: false
        });
    }

    // form
    todoGroupNameChange = (e) => {
        this.setState({
            todo_group_name: e.target.value
        });
    }
    todoGroupOrderChange = (e) => {
        this.setState({
            todo_group_order: e.target.value
        });
    }
    todoGroupSavelick = () => {
        const id = this.state.id;
        const todo_group_name = this.state.todo_group_name;
        const todo_group_order = this.state.todo_group_order;
        todoGroupSave(this, todo_group_name, todo_group_order, id);
    }

    render() {
        console.log('insistime-web/manage/todo-page: render');

        const tips = this.state.tips ? <Tips tips={this.state.tips}/> : null;
        return <Modal
            width="300px"
            show={this.state.show}
            closeModal={this.modalClose}
        >
            <Input
                type="hidden"
                value={this.state.id}
            />
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
                onClick={this.todoGroupSavelick}
                text="submit"
            />
            {tips}
        </Modal>;
    }
}