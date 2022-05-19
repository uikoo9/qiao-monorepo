'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// index
import IndexContainer from '@components/index/index.jsx';

/**
 * index view
 */
class IndexView extends React.Component {
  render() {
    return (
      <IndexContainer />
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexView />);