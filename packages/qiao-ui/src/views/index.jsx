'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// css
import './index.scss';

// index
import { Header } from '../components/index.js';

/**
 * index view
 */
class IndexView extends React.Component {
  render() {
    return (
      <div className="container">
        <Header
          logo={'insistime.com'}
        />
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexView />);