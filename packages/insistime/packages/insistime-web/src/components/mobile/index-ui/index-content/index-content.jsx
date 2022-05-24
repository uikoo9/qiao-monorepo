'use strict';

// react
import React from 'react';

// css
import './index-content.scss';

/**
 * index content
 */
export default class IndexContent extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="txt-main">{this.props.constant.insistime}</div>  
        <div className="txt-other">{this.props.constant.insistimeSolgan}</div>
      </div>
    );
  }
}