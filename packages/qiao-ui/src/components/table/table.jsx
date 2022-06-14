'use strict';

// react
import React from 'react';

// css
import './table.scss';

/**
 * table
 */
export class Table extends React.Component {
    render() {
        // // cols
        // const cols = this.props.cols && this.props.cols.map((col, index) => {
        //     if (!col) return;

        //     const idCol = <th scope="col" key={index}>{col}</th>;
        //     const otherCol = <th key={index}>{col}</th>;
        //     return col == 'id' ? idCol : otherCol;
        // });

        // // rows
        // const rows = this.props.rows && this.props.rows.map((row, index) => {
        //     if (!row) return;

        //     const rowKeyLength = Object.keys(row).length;

        //     return <tr>
        //         <th scope="row">{item}</th>
        //     </tr>;
        // });
        // let rows = [];
        // for(let i=0; i<this.props.rows.length; i++){
        //     rows.push(<tr>);
        //     const row = this.props.rows[i];
        //     for(let j=0; j<this.props.cols.length; j++){
        //         const col = this.props.cols[j];
        //         const item = row[col];

        //         if(col == 'id'){
        //             rows.push(<th scope="row">{item}</th>);
        //         }else{
        //             rows.push(<th>{item}</th>);
        //         }
        //     }
        //     rows.push(</tr>);
        // }

        // // return
        // return (
        //     <table className="table table-bordered table-hover">
        //         <thead className="table-light">
        //             <tr>{cols}</tr>
        //         </thead>
        //         <tbody>{rows.join('')}</tbody>
        //     </table>
        // );
    }
}