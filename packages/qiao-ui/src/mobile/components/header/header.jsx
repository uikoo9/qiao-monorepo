// react
import React from 'react';

// css
import './header.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * mobile header
 */
export const MobileHeader = (props) => {
    colorLog('qiao-ui/mobile/header: render');

    const navs = props.navs && props.navs.map((nav, index) => {
        if (!nav.url || !nav.name) return;

        return <div className="nav nav-txt right" key={index}>
            <a target="_blank" href={nav.url} rel="noreferrer">{nav.name}</a>
        </div>;
    });

    return (
        <div className={props.center ? 'header center' : 'header'}>
            <div className="logo nav-txt">
                <a target="_blank" href={props.logoUrl} rel="noreferrer">{props.logo}</a>
            </div>
            <div className="navs">{navs}</div>
        </div>
    );
};