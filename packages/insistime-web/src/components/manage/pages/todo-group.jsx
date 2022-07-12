'use strict';

// react
import React from 'react';

// ui
import {
    Modal,
    Table,
    Input,
} from 'qiao-ui';

// js
import {
    getCols,
    getRows,
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

        this.onClick = this.onClick.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.todoGroupNameChange = this.todoGroupNameChange.bind(this);
        this.todoGroupOrderChange = this.todoGroupOrderChange.bind(this);

        console.log('insistime-web/manage/todo-page: constructor');
    }

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

    onClick() {
        this.setState({
            modalShow: true
        });
    }

    modalClose() {
        this.setState({
            modalShow: false
        });
    }

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

    render() {
        console.log('insistime-web/manage/todo-page: render');

        return <div className="data-container">
            <button onClick={this.onClick}>add</button>
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
            </Modal>
        </div>;
    }
}