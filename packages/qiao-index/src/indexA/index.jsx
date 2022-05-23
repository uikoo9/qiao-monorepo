'use strict';

// react
import React from 'react';

// constant
import Constant from '@components/index/_constant.js';

// index
import IndexComponent from './index-ui/index-component.jsx';

/**
 * index container
 */
export default class IndexContainer extends React.Component {
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