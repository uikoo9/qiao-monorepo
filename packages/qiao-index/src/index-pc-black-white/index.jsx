'use strict';

// react
import React from 'react';

// index
import IndexComponent from './ui/index-component.jsx';

/**
 * index pc black white container
 */
export default class IndexPCBlackWhiteContainer extends React.Component {
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