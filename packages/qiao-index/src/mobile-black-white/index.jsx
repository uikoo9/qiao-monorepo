'use strict';

// react
import React from 'react';

// constant
import Constant from './_constant.js';

// index ui
import IndexComponent from './ui/index-component.jsx';

/**
 * mobile black white container
 */
export class MobileBlackWhiteContainer extends React.Component {
  render() {
    const _constant = this.props.constant || Constant;

    return (
      <div className="container">
        <IndexComponent
          constant = {_constant}
        />
      </div>
    );
  }
}