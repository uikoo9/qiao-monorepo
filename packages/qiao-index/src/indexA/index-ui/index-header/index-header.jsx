'use strict';

// react
import React from 'react';

// css
import './index-header.scss';

/**
 * index header
 */
export default class IndexHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo nav-txt">{this.props.constant.logo}</div>
        <div className="navs">
          <div className="nav nav-txt">
            <a target="_blank" href={this.props.constant.githubUrl}>{this.props.constant.github}</a>
          </div>
          <div className="nav nav-txt"></div>
          <div className="nav nav-txt"></div>
        </div>
      </div>
    );
  }
}