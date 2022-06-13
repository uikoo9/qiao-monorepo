'use strict';

// react
import React from 'react';

// css
import './login.scss';

// login fn
import { loginBtnClick } from './login.js';

// login ui
import { LoginBox } from './login-box/login-box.jsx'

/**
 * black white login container
 */
export class BlackWhiteLoginContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <LoginBox
          usernameHolder={this.props.usernameHolder}
          passwordHolder={this.props.passwordHolder}
          loginBtn={this.props.loginBtn}
          loginClick={loginBtnClick}
        />
      </div>
    );
  }
}