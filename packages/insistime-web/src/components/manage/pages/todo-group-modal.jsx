'use strict';

// react
import React from 'react';

// ui
import { Modal, Input, Button, Tips, gridSave } from 'qiao-ui';

// dishi service
import { todoGroupSave } from 'dishi-service';

/**
 * todo group modal
 */
export class ToDoGroupModal extends React.Component {
    constructor(props) {
        console.log('insistime-web/manage/page/todo-group-modal: constructor');

        super(props);

        this.state = {
            show: false,
            id: '',
            todo_group_name: '',
            todo_group_order: '',
            tips: '',
        };
    }

    // modal
    modalShow = (row) => {
        console.log('insistime-web/manage/page/todo-group-modal: modalShow');

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
        console.log('insistime-web/manage/page/todo-group-modal: modalClose');

        this.setState({
            show: false
        });
    }

    // form
    todoGroupNameChange = (e) => {
        console.log('insistime-web/manage/page/todo-group-modal: todoGroupNameChange');

        this.setState({
            todo_group_name: e.target.value
        });
    }
    todoGroupOrderChange = (e) => {
        console.log('insistime-web/manage/page/todo-group-modal: todoGroupOrderChange');

        this.setState({
            todo_group_order: e.target.value
        });
    }

    // save
    saveClick = async () => {
        console.log('insistime-web/manage/page/todo-group-modal: saveClick');

        const id = this.state.id;
        const todo_group_name = this.state.todo_group_name;
        const todo_group_order = this.state.todo_group_order;
        await gridSave(todoGroupSave, todo_group_name, todo_group_order, id);

        this.modalClose();
        this.props.reload();
    }

    render() {
        console.log('insistime-web/manage/page/todo-group-modal: render');

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
                onClick={this.saveClick}
                text="submit"
            />
            {tips}
        </Modal>;
    }
}