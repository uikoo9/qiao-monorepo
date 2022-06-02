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
          constant={this.props.constant}
        />
      </>
    );
  }
}