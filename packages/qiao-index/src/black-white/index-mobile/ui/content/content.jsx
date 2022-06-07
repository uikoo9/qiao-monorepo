'use strict';

// react
import React from 'react';

// css
import './content.scss';

/**
 * index content
 */
export default class IndexContent extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="txt-main">{this.props.constant.contentName}</div>
        <div className="txt-other">{this.props.constant.contentSolgan}</div>
      </div>
    );
  }
}