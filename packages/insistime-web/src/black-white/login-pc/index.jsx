'use strict';

// react
import React from 'react';

// index
import IndexComponent from './ui/index-component.jsx';

/**
 * black white login container
 */
export class IndexBlackWhiteContainer extends React.Component {
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