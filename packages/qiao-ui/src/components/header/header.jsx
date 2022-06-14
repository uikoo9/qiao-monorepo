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
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">insistime.com</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">首页</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/uikoo9/qiao-monorepo" target="_blank">Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}