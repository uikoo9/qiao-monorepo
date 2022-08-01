// react
import React from 'react';

// css
import './header.scss';

/**
 * header
 */
export class Header extends React.Component {
    render() {
        console.log('qiao-ui/pc/header: render');

        const navs = this.props.navs && this.props.navs.map((nav, index) => {
            if (!nav.url || !nav.name) return;

            return <div className="nav nav-txt right" key={index}>
                {
                    nav.blank ? <a target="_blank" href={nav.url}>{nav.name}</a> : <a href={nav.url}>{nav.name}</a>
                }
            </div>
        });

        return (
            <div className="header">
                <div className="logo nav-txt">
                    <a href={this.props.logoUrl}>{this.props.logo}</a>
                </div>
                <div className="navs">{navs}</div>
            </div>
        );
    }
}