'use strict';

// react
import React from 'react';

// css
import './manage.scss';

// ui
import {
    Header,
    Menus,
} from 'qiao-ui';

/**
 * manage container
 */
export class ManageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <Header
                logo={this.props.constant.logo}
                navs={this.props.constant.navs}
            />
            <Menus 
                menus={this.props.constant.menus}
            />
        </div>;
    }
}