// react
import React from 'react';

// ui
import { Modal, Input, Button, Tips, gridSave } from 'qiao-ui';

// dishi service
import { todoItemSave } from 'dishi-service';

/**
 * todo item modal
 */
export class TodoItemModal extends React.Component {
    constructor(props) {
        console.log('insistime-web/manage/page/todo-item-modal: constructor');

        super(props);

        this.state = {
            show: false,
            tips: '',
            data: {
                id: '',
                
                todo_group_id: '',
                todo_item_name: '',
                todo_item_order: '',
                todo_item_status: '',
                
            },
        };
    }

    // modal
    modalShow = (row) => {
        console.log('insistime-web/manage/page/todo-item-modal: modalShow');

        row = row || {};
        this.setState({
            show: true,
            tips: '',
            data: {
                id: row.id || '',
                
                todo_group_id: row.todo_group_id || '',
                todo_item_name: row.todo_item_name || '',
                todo_item_order: row.todo_item_order || '',
                todo_item_status: row.todo_item_status || '',
                
            }
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

        let data = this.state.data;
        data.todo_group_id = e.target.value;
        this.setState({
            data: data
        });
    }
    
    todoItemNameChange = (e) => {
        console.log('insistime-web/manage/page/todo-item-modal: todoItemNameChange');

        let data = this.state.data;
        data.todo_item_name = e.target.value;
        this.setState({
            data: data
        });
    }
    
    todoItemOrderChange = (e) => {
        console.log('insistime-web/manage/page/todo-item-modal: todoItemOrderChange');

        let data = this.state.data;
        data.todo_item_order = e.target.value;
        this.setState({
            data: data
        });
    }
    
    todoItemStatusChange = (e) => {
        console.log('insistime-web/manage/page/todo-item-modal: todoItemStatusChange');

        let data = this.state.data;
        data.todo_item_status = e.target.value;
        this.setState({
            data: data
        });
    }
    

    // save
    saveClick = async () => {
        console.log('insistime-web/manage/page/todo-item-modal: saveClick');

        const isSuc = await gridSave(this, todoItemSave, this.state.data);
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
                value={this.state.data.id}
            />
            
            <Input
                type="text"
                placeholder="todo_group_id"
                value={this.state.data.todo_group_id}
                onChange={this.todoGroupIdChange}
            />
            
            <Input
                type="text"
                placeholder="todo_item_name"
                value={this.state.data.todo_item_name}
                onChange={this.todoItemNameChange}
            />
            
            <Input
                type="text"
                placeholder="todo_item_order"
                value={this.state.data.todo_item_order}
                onChange={this.todoItemOrderChange}
            />
            
            <Input
                type="text"
                placeholder="todo_item_status"
                value={this.state.data.todo_item_status}
                onChange={this.todoItemStatusChange}
            />
            
            <Button
                onClick={this.saveClick}
                text="submit"
            />
            {tips}
        </Modal>;
    }
}