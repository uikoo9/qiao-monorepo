'use strict';

// react
import React from 'react';

// index ui
import IndexComponent from './ui/index-component.jsx';

/**
 * black white index mobile container
 */
export class BlackWhiteIndexMobileContainer extends React.Component {
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