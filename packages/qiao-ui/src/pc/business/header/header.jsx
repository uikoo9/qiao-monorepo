// react
import React from 'react';

// css
import './header.scss';

// ui
import { Link } from '../../index.js';

/**
 * header
 */
export class Header extends React.Component {
    render() {
        console.log('qiao-ui/pc/header: render');

        const navs = this.props.navs && this.props.navs.map((nav, index) => {
            if (!nav.url || !nav.name) return;

            return <div className="nav nav-txt right" key={index}>
                <Link blank={nav.blank} url={nav.url} txt={nav.name} />
            </div>
        });

        return (
            <div className="header">
                <div className="logo nav-txt">
                    <Link url={this.props.logoUrl} txt={this.props.logo} />
                </div>
                <div className="navs">{navs}</div>
            </div>
        );
    }
}