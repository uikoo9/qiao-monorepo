// react
import React from 'react';

// css
import './login.scss';

// login fn
import { loginBtnClick } from './login.js';

// login ui
import { LoginBox } from 'qiao-ui'

/**
 * login container
 */
export class LoginContainer extends React.Component {
  render() {
    console.log('insistime-web/login-container: render');

    return (
      <div className="container">
        <LoginBox
          usernameHolder={this.props.usernameHolder}
          passwordHolder={this.props.passwordHolder}
          loginBtn={this.props.loginBtn}
          loginClick={loginBtnClick}
          loginSucUrl={this.props.loginSucUrl}
        />
      </div>
    );
  }
}