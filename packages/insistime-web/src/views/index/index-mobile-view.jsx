'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// constant
import Constant from './_constant.js';

// index
import { IndexMobileContainer } from '@components/index-mobile/index.jsx';

/**
 * index mobile view
 */
class IndexMobileView extends React.Component {
  render() {
    return (
      <IndexMobileContainer constant={Constant} />
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexMobileView />);