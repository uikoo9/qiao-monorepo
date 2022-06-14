// react
import React from 'react';

/**
 * get navs
 * @param {*} that 
 * @returns navs
 */
export const getNavs = (that) =>{
    const navs = that.props.navs;
    if(!navs) return; 

    return navs.map((nav, index) => {
        if (!nav || !nav.name) return;

        return <li className="nav-item" key={index}>
            <a className="nav-link active" aria-current="page" href={nav.url}>{nav.name}</a>
        </li>
    });
};