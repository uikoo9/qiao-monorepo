'use strict';

// react
import React from 'react';

// login fn
import { clickLoginBtn } from './fn/login.js';

// login ui
import LoginComponent from './ui/login-component.jsx';

/**
 * black white login mobile container
 */
export class BlackWhiteLoginMobileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      tips: '',
    };

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.clickLogin = this.clickLogin.bind(this);
  }

  usernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  passwordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  async clickLogin() {
    clickLoginBtn(this);
  }

  render() {
    return (
      <div className="container">
        <LoginComponent
          username={this.state.username}
          password={this.state.password}
          usernameChange={this.usernameChange}
          passwordChange={this.passwordChange}
          clickLogin={this.clickLogin}
          tips={this.state.tips}
        />
      </div>
    );
  }
}