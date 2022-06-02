'use strict';

// react
import React from 'react';

// css
import './box.scss';

/**
 * login box
 */
export default class LoginBox extends React.Component {
  render() {
    return (
      <div className="box">
        <div className="input">
          <input type="text" placeholder='username' />
        </div>
        <div className="input">
          <input type="password" placeholder='password' />
        </div>
        <div className="btn">
          <div className="ctx">Login</div>
        </div>
      </div>
    );
  }
}