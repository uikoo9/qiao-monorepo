// react
import React from 'react';

/**
 * get cols
 * @param {*} that 
 * @returns cols
 */
export const getCols = (that) => {
    console.log('qiao-ui/pc/table: getCols');

    const cols = that.props.cols;
    if (!cols) return;

    return cols.map((col, index) => {
        if (!col) return;

        return <th key={index}>{col}</th>;
    });
};

/**
 * get rows
 * @param {*} that 
 * @returns rows
 */
export const getRows = (that) => {
    console.log('qiao-ui/pc/table: getRows');

    const rows = that.props.rows;
    if (!rows) return;

    return rows.map((row, index) => {
        if (!row) return;

        const rowKeys = Object.keys(row);

        return (
            <tr key={index}>
                {rowKeys.map((item, j) => {
                    if(item != 'op'){
                        return <td key={j}>{row[item]}</td>;
                    }else{
                        const id = row.id;

                        return <td key={j} className="op">
                            <div onClick={() => {that.props.editRow(id);}}>edit</div>
                            <div onClick={() => {that.props.delRow(id);}}>del</div>
                        </td>;
                    }
                })}
            </tr>
        );
    });
};