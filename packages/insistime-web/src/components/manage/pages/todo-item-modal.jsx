'use strict';

// react
import React from 'react';

// ui
import { Modal, Input, Button, Tips, gridSave } from 'qiao-ui';

// dishi service
import { todoItemSave } from 'dishi-service';

/**
 * todo item modal
 */
export class ToDoItemModal extends React.Component {
    constructor(props) {
        console.log('insistime-web/manage/page/todo-item-modal: constructor');

        super(props);

        this.state = {
            show: false,
            id: '',
            todo_group_id: '',
            todo_item_name: '',
            todo_item_order: '',
            todo_item_status: '',
            tips: '',
        };
    }

    // modal
    modalShow = (row) => {
        console.log('insistime-web/manage/page/todo-item-modal: modalShow');

        if(!row) return;
        this.setState({
            show: true,
            id: row.id || '',
            todo_group_id: row.todo_group_id || '',
            todo_item_name: row.todo_item_name || '',
            todo_item_order: row.todo_item_order || '',
            todo_item_status: row.todo_item_status || '',
            tips: '',
        });
    }
    modalClose = () => {
        console.log('insistime-web/manage/page/todo-item-modal: modalClose');

        this.setState({
            show: false
        });
    }

    // form
    todoGroupIdChange = (e) => {
        console.log('insistime-web/manage/page/todo-item-modal: todoGroupIdChange');

        this.setState({
            todo_group_id: e.target.value
        });
    }
    todoItemNameChange = (e) => {
        console.log('insistime-web/manage/page/todo-item-modal: todoItemNameChange');

        this.setState({
            todo_item_name: e.target.value
        });
    }
    todoItemOrderChange = (e) => {
        console.log('insistime-web/manage/page/todo-item-modal: todoItemOrderChange');

        this.setState({
            todo_item_order: e.target.value
        });
    }
    todoItemStatusChange = (e) => {
        console.log('insistime-web/manage/page/todo-item-modal: todoItemStatusChange');

        this.setState({
            todo_item_status: e.target.value
        });
    }

    // save
    saveClick = async () => {
        console.log('insistime-web/manage/page/todo-item-modal: saveClick');

        const isSuc = await gridSave(this, todoItemSave, this.state);
        if(!isSuc) return;

        this.modalClose();
        this.props.reload();
    }

    render() {
        console.log('insistime-web/manage/page/todo-item-modal: render');

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