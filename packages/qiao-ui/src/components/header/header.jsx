'use strict';

// react
import React from 'react';

// css
import './header.scss';

import 'bootstrap/scss/bootstrap.scss';
import { Button } from 'bootstrap';

/**
 * header
 */
export class Header extends React.Component {
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
        <Button type="button" className="btn btn-primary">Primary</Button>
      </div>
    );
  }
}