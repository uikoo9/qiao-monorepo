'use strict';

// react
import React from 'react';

/**
 * index header
 */
export default class IndexHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo nav-txt">insistime.com</div>
        <div className="navs">
          <div className="nav nav-txt">
            <a href="https://github.com/insistime/insistime">Github</a>
          </div>
          <div className="nav nav-txt"></div>
          <div className="nav nav-txt"></div>
        </div>
      </div>
    );
  }
}