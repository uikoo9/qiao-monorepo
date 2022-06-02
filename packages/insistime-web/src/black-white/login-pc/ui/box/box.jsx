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
          <input type="text" placeholder='username' onChange={this.props.usernameChange} value={this.props.username} />
        </div>
        <div className="input">
          <input type="password" placeholder='password' onChange={this.props.passwordChange} value={this.props.password} />
        </div>
        <div className="btn">
          <div className="ctx" onClick={this.props.clickLogin}>Login</div>
        </div>
        <div className="tips">{this.props.tips}</div>
      </div>
    );
  }
}