// react
import React from 'react';

// css
import './header.scss';

// log
import { colorLog } from '../../util/log.js';

/**
 * mobile header
 */
export const MobileHeader = (props) => {
    colorLog('qiao-ui/mobile/header: render');

    const navs = props.navs && props.navs.map((nav, index) => {
        if (!nav.url || !nav.name) return;

        return <div className="nav nav-txt" key={index}>
            <a target="_blank" href={nav.url} rel="noreferrer">{nav.name}</a>
        </div>;
    });

    return (
        <div className="header">
            <div className="logo nav-txt">{props.logo}</div>
            <div className="navs">{navs}</div>
        </div>
    );
};