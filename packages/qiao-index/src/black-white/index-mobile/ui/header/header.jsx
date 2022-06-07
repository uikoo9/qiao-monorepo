'use strict';

// react
import React from 'react';

// css
import './header.scss';

/**
 * index header
 */
export default class IndexHeader extends React.Component {
  render() {
    const navs = this.props.constant.navs && this.props.constant.navs.map((nav, index) => {
      if (!nav.url || !nav.name) return;

      return <div className="nav nav-txt" key={index}>
        <a target="_blank" href={nav.url}>{nav.name}</a>
      </div>
    });

    return (
      <div className="header">
        <div className="logo nav-txt">{this.props.constant.logo}</div>
        <div className="navs">{navs}</div>
      </div>
    );
  }
}