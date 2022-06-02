'use strict';

// react
import React from 'react';

// index
import IndexComponent from './ui/index-component.jsx';

/**
 * black white index pc container
 */
export class BlackWhiteIndexPCContainer extends React.Component {
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