// react
import React from 'react';

// log
import { logRed } from '../../../util/log.js';

/**
 * get cols
 * @param {*} props 
 * @returns cols
 */
export const getCols = (props) => {
    logRed('qiao-ui/pc/table: getCols');

    const cols = props.cols;
    if (!cols) return;

    return cols.map((col, index) => {
        if (!col) return;

        return <th key={index}>{col}</th>;
    });
};

/**
 * get rows
 * @param {*} props 
 * @returns rows
 */
export const getRows = (props) => {
    logRed('qiao-ui/pc/table: getRows');

    const rows = props.rows;
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
                                onChange={props.checkboxChange}
                            />
                        </td>;
                    }

                    // op
                    if (item == 'op') {
                        return <td key={`op_${row.id}_${j}`} className="op">
                            <div onClick={() => { props.editRow(row); }}>edit</div>
                            <div onClick={() => { props.delRow(row.id); }}>del</div>
                        </td>;
                    }

                    // other
                    return <td key={`data_${row.id}_${j}`}>{row[item]}</td>;
                })}
            </tr>
        );
    });
};