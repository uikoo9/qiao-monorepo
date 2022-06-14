'use strict';

// react
import React from 'react';

// css
import './header.scss';

/**
 * header
 */
export class Header extends React.Component {
    render() {
        // const
        const navbarBg = this.props.isDark ? 'navbar-dark bg-dark' : 'bg-light';
        const navbarLogo = this.props.logo;
        const navs = this.props.navs && this.props.navs.map((nav, index) => {
            if (!nav || !nav.name) return;

            return <li className="nav-item" key={index}>
                <a className="nav-link active" aria-current="page" href={nav.url}>{nav.name}</a>
            </li>
        });

        // return
        return (
            <nav className={`navbar navbar-expand-sm ${navbarBg}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{navbarLogo}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">{navs}</ul>
                    </div>
                </div>
            </nav>
        );
    }
}