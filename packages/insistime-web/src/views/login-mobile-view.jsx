'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// index
import { BlackWhiteLoginMobileContainer } from 'qiao-index';

/**
 * index view
 */
class IndexView extends React.Component {
  render() {
    return (
      <BlackWhiteLoginMobileContainer
        usernameHolder={'username'}
        passwordHolder={'password'}
        loginBtn={'Login'}
      />
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexView />);