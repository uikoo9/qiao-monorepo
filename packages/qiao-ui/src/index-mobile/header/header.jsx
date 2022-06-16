'use strict';

// react
import React from 'react';

// css
import './header.scss';

/**
 * mobile header
 */
export class MobileHeader extends React.Component {
  render() {
    const navs = this.props.navs && this.props.navs.map((nav, index) => {
      if (!nav.url || !nav.name) return;

      return <div className="nav nav-txt" key={index}>
        <a target="_blank" href={nav.url}>{nav.name}</a>
      </div>
    });

    return (
      <div className="header">
        <div className="logo nav-txt">{this.props.logo}</div>
        <div className="navs">{navs}</div>
      </div>
    );
  }
}