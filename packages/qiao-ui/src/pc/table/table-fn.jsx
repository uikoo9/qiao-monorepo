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

        return <th key={index}>{col}</th>;
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
                    return <td key={j}>{row[item]}</td>;
                })}
            </tr>
        );
    });
};