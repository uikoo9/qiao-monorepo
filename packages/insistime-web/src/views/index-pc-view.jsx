'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// constant
import Constant from '../_constant.js';

// index
import { IndexPCBlackWhiteContainer } from 'qiao-index';

/**
 * index view
 */
class IndexView extends React.Component {
  render() {
    return (
      <IndexPCBlackWhiteContainer constant={Constant} />
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexView />);