// react
import React from 'react';

// css
import './table.scss';

// js
import { getCols, getRows } from './table-fn.jsx';

/**
 * table
 */
export class Table extends React.Component {
    render() {
        // const
        const cols = getCols(this);
        const rows = getRows(this);

        // return
        return (
            <div className="table-container">
                <table>
                    <thead>
                        <tr>{cols}</tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}