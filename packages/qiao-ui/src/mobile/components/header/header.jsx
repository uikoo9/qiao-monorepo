// react
import React from 'react';

// css
import './header.scss';

// ui
import { Link } from '../../../index.js';

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
            <Link blank={nav.blank} url={nav.url} txt={nav.name} />
        </div>;
    });

    return (
        <div className={props.center ? 'header center' : 'header'}>
            <div className="logo nav-txt">
                <Link url={props.logoUrl} txt={props.logo} />
            </div>
            <div className="navs">{navs}</div>
        </div>
    );
};