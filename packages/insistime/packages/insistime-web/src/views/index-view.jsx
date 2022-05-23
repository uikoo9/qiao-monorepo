'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// index
import { IndexA } from 'qiao-index';

/**
 * index view
 */
class IndexView extends React.Component {
  render() {
    return (
      <IndexA />
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexView />);