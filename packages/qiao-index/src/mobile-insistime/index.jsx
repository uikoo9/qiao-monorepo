'use strict';

// react
import React from 'react';

// constant
import Constant from './_constant.js';

// index ui
import IndexComponent from './index-ui/index-component.jsx';

/**
 * mobile insistme container
 */
export class MobileInsistimeContainer extends React.Component {
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