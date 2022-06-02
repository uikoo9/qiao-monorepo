'use strict';

// react
import React from 'react';

// login
import LoginComponent from './ui/login-component.jsx';

/**
 * black white login container
 */
export class BlackWhiteLoginContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <LoginComponent
          constant={this.props.constant}
        />
      </div>
    );
  }
}