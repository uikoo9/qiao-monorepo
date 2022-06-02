'use strict';

// react
import React from 'react';

// index ui
import IndexComponent from './ui/index-component.jsx';

/**
 * index mobile black white container
 */
export class IndexMobileBlackWhiteContainer extends React.Component {
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