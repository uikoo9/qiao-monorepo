'use strict';

// react
import React from 'react';

// index
import IndexComponent from './ui/index-component.jsx';

/**
 * index black white container
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