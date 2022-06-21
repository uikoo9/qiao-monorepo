'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// constant
import Constant from './_constant.js';

// index
import { IndexPCContainer } from '@components/index-pc/index.jsx';

/**
 * index pc view
 */
class IndexPCView extends React.Component {
  render() {
    return (
      <IndexPCContainer constant={Constant} />
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexPCView />);