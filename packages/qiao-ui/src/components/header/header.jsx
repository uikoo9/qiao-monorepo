// react
import React from 'react';

// css
import './header.scss';

// js
import { getNavs } from './header-fn.jsx';

/**
 * header
 */
export class Header extends React.Component {
    render() {
        // const
        const navbarBg = this.props.isDark ? 'navbar-dark bg-dark' : 'bg-light';
        const navbarLogo = this.props.logo;
        const navs = getNavs(this);

        // return
        return (
            <nav className={`navbar navbar-expand ${navbarBg}`}>
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