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

        this.editModalRef = React.createRef();
        this.searchModalRef = React.createRef();
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

        this.editModalRef.current.modalShow(row);
    }

    // del row
    delRow = async (id) => {
        console.log('qiao-ui/pc/grid: delRow');

        const isSuc = await this.props.del(id);
        if (!isSuc) return;

        this.reload();
        this.setState({
            cks: []
        });
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

        const EditModal = this.props.editModal;
        const SearchModal = this.props.searchModal;
        return <div className="data-container">
            <Toolbar
                cks={this.state.cks}
                editModal={this.editModalRef}
                searchModal={this.searchModalRef}
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

            <EditModal
                ref={this.editModalRef}
                reload={this.reload}
            />

            <SearchModal
                ref={this.searchModalRef}
                reload={this.reload}
            />
        </div>;
    }
}