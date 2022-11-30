// react
import React from 'react';

// css
import './table.scss';

// js
import { getCols, getRows } from './table-fn.jsx';

// log
import { colorLog } from '../../../util/log.js';

/**
 * table
 */
export const Table = (props) => {
  colorLog('qiao-ui/pc/table: render');

  // const
  const cols = getCols(props);
  const rows = getRows(props);

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
};
