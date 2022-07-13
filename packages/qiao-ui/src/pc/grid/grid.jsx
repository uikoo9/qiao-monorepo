// react
import React from 'react';

// ui
import { Table, Toolbar } from '../../index.js';

/**
 * grid
 */
export class Grid extends React.Component {
    constructor(props) {
        console.log('qiao-ui/pc/grid: constructor');

        super(props);

        this.state = {
            cks: [],
            cols: null,
            rows: null,
            sumpage: null,
            pagenumber: null,
        };

        this.modalRef = React.createRef();
    }

    // init
    componentDidMount() {
        console.log('qiao-ui/pc/grid: componentDidMount');

        this.reload();
    }

    // reload
    reload = (pagenumber) => {
        console.log('qiao-ui/pc/grid: reload');

        this.props.init(this, pagenumber);
    }

    // edit row
    editRow = (row) => {
        console.log('qiao-ui/pc/grid: editRow');

        this.modalRef.current.modalShow(row);
    }

    // del row
    delRow = async (id) => {
        console.log('qiao-ui/pc/grid: delRow');

        await this.props.del(id);
        this.reload();
    }

    // toolbar
    checkboxChange = (e) => {
        console.log('qiao-ui/pc/grid: checkboxChange');

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
        console.log('qiao-ui/pc/grid: render');

        const Modal = this.props.modal;
        return <div className="data-container">
            <Toolbar 
                cks={this.state.cks}
                modal={this.modalRef}
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

            <Modal
                ref={this.modalRef}
                reload={this.reload}
            />
        </div>;
    }
}