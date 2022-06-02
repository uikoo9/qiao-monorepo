'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// index
import { BlackWhiteLoginPCContainer } from '../black-white/login-pc/login.jsx';

/**
 * index view
 */
class IndexView extends React.Component {
  render() {
    return (
      <BlackWhiteLoginPCContainer />
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexView />);