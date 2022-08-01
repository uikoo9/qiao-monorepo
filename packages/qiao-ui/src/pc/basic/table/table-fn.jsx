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
                    // ck
                    if (item == 'ck') {
                        return <td key={`ck_${row.id}_${j}`}>
                            <input
                                type="checkbox"
                                name={row.id}
                                value={row.id}
                                onChange={that.props.checkboxChange}
                            />
                        </td>;
                    }

                    // op
                    if (item == 'op') {
                        return <td key={`op_${row.id}_${j}`} className="op">
                            <div onClick={() => { that.props.editRow(row); }}>edit</div>
                            <div onClick={() => { that.props.delRow(row.id); }}>del</div>
                        </td>;
                    }

                    // other
                    return <td key={`data_${row.id}_${j}`}>{row[item]}</td>;
                })}
            </tr>
        );
    });
};