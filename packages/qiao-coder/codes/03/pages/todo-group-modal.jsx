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
            tips: '',
            data: {
                id: '',
                todo_group_name: '',
                todo_group_order: '',
            },
        };
    }

    // modal
    modalShow = (row) => {
        console.log('insistime-web/manage/page/todo-group-modal: modalShow');

        row = row || {};
        this.setState({
            show: true,
            tips: '',
            data: {
                id: row.id || '',
                todo_group_name: row.todo_group_name || '',
                todo_group_order: row.todo_group_order || '',
            }
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

        let data = this.state.data;
        data.todo_group_name = e.target.value;
        this.setState({
            data: data
        });
    }
    todoGroupOrderChange = (e) => {
        console.log('insistime-web/manage/page/todo-group-modal: todoGroupOrderChange');

        let data = this.state.data;
        data.todo_group_order = e.target.value;
        this.setState({
            data: data
        });
    }

    // save
    saveClick = async () => {
        console.log('insistime-web/manage/page/todo-group-modal: saveClick');

        const isSuc = await gridSave(this, todoGroupSave, this.state.data);
        if(!isSuc) return;

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
                value={this.state.data.id}
            />
            <Input
                type="text"
                placeholder="todo_group_name"
                value={this.state.data.todo_group_name}
                onChange={this.todoGroupNameChange}
            />
            <Input
                type="text"
                placeholder="todo_group_order"
                value={this.state.data.todo_group_order}
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