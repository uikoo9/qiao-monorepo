'use strict';

// react
import React from 'react';

// css
import './menus.scss';

/**
 * menus
 */
export class Menus extends React.Component {
    render() {
        const menus = this.props.menus && this.props.menus.map((menu, index) => {
            if (!menu.name) return;

            return <div className={`${menu.main ? 'menu main' : 'menu'}`} key={index}>
                {
                    menu.url ? <a href={menu.url}>{menu.name}</a> : menu.name
                }
            </div>;
        });

        return (
            <div className="menus">{menus}</div>
        );
    }
}