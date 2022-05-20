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
          <div className="nav nav-txt">nav1</div>
          <div className="nav nav-txt">nav2</div>
          <div className="nav nav-txt">nav3</div>
        </div>
      </div>
    );
  }
}