'use strict';

// react
import React from 'react';

// login
import LoginBox from './box/box.jsx';

/**
 * login component
 */
export default class LoginComponent extends React.Component {
  render() {
    return (
      <>
        <LoginBox
          username={this.props.username}
          password={this.props.password}
          usernameChange={this.props.usernameChange}
          passwordChange={this.props.passwordChange}
          clickLogin={this.props.clickLogin}
          tips={this.props.tips}
        />
      </>
    );
  }
}