'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// index
import { BlackWhiteLoginMobileContainer } from '../black-white/login-mobile/login.jsx';

/**
 * index view
 */
class IndexView extends React.Component {
  render() {
    return (
      <BlackWhiteLoginMobileContainer />
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexView />);