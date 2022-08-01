// react
import React from 'react';

// css
import './menus.scss';

// ui
import { Link } from '../../index.js';

/**
 * menus
 */
export class Menus extends React.Component {
    render() {
        console.log('qiao-ui/pc/menus: render');

        const menus = this.props.menus && this.props.menus.map((menu, index) => {
            if (!menu.name) return;

            return <div className={`${menu.main ? 'menu main' : 'menu'}`} key={index}>
                {
                    menu.url ? <Link url={menu.url} txt={menu.name}/>: menu.name
                }
            </div>;
        });

        return (
            <div className="menus">{menus}</div>
        );
    }
}