// react
import React from 'react';

// css
import './menus.scss';

// ui
import { Link } from '../../index.js';

/**
 * menus
 */
export const Menus = (props) => {
    console.log('qiao-ui/pc/menus: render');

    const menus = props.menus && props.menus.map((menu, index) => {
        if (!menu.name) return;

        return <div className={`${menu.main ? 'menu main' : 'menu'}`} key={index}>
            {
                menu.url ? <Link url={menu.url} txt={menu.name} /> : menu.name
            }
        </div>;
    });

    return (
        <div className="menus">{menus}</div>
    );
};