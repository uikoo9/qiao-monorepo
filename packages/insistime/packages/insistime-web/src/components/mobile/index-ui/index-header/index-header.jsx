'use strict';

// react
import React from 'react';

// css
import './index-header.scss';

// constant
import Constant from '@components/index/_constant.js';

/**
 * index header
 */
export default class IndexHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo nav-txt">{Constant.logo}</div>
        <div className="navs">
          <div className="nav nav-txt">
            <a target="_blank" href={Constant.githubUrl}>{Constant.github}</a>
          </div>
          <div className="nav nav-txt"></div>
        </div>
      </div>
    );
  }
}