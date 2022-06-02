'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// constant
import Constant from '../_constant.js';

// index
import { BlackWhiteLoginContainer } from '../black-white/login-pc/login.jsx';

/**
 * index view
 */
class IndexView extends React.Component {
  render() {
    return (
      <BlackWhiteLoginContainer constant={Constant} />
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexView />);