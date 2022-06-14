// react
import React from 'react';

/**
 * get cols
 * @param {*} that 
 * @returns cols
 */
export const getCols = (that) => {
    const cols = that.props.cols;
    if (!cols) return;

    return cols.map((col, index) => {
        if (!col) return;

        const idCol = <th scope="col" key={index}>{col}</th>;
        const otherCol = <th key={index}>{col}</th>;
        return col == 'id' ? idCol : otherCol;
    });
};

/**
 * get rows
 * @param {*} that 
 * @returns rows
 */
export const getRows = (that) => {
    const rows = that.props.rows;
    if (!rows) return;

    return rows.map((row, index) => {
        if (!row) return;

        return (
            <tr key={index}>
                {Object.keys(row).map((item, j) => {
                    const idCol = <th scope="row" key={j}>{row[item]}</th>;
                    const otherCol = <td key={j}>{row[item]}</td>;

                    return item == 'id' ? idCol : otherCol;
                })}
            </tr>
        );
    });
};