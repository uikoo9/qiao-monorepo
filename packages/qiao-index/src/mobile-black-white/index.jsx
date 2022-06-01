'use strict';

// react
import React from 'react';

// index ui
import IndexComponent from './ui/index-component.jsx';

/**
 * mobile black white container
 */
export class MobileBlackWhiteContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <IndexComponent
          constant={this.props.constant}
        />
      </div>
    );
  }
}