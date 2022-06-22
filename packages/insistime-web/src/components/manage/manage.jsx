'use strict';

// react
import React from 'react';

// css
import './manage.scss';

// ui
import {
    Header,
    Footer,
} from 'qiao-ui';

// constant
import Constant from '../../views/index/_constant.js';

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
                logo={Constant.logo}
                navs={Constant.navs}
            />
            <div className="menus">
                <div className="menu main">用户管理</div>
                <div className="menu">用户管理</div>
                <div className="menu">菜单管理</div>
                <div className="menu">权限管理</div>
                <div className="menu main">用户管理</div>
                <div className="menu">用户管理</div>
                <div className="menu">菜单管理</div>
                <div className="menu">权限管理</div>
                <div className="menu main">用户管理</div>
                <div className="menu">用户管理</div>
                <div className="menu">菜单管理</div>
                <div className="menu">权限管理</div>
                <div className="menu main">用户管理</div>
                <div className="menu">用户管理</div>
                <div className="menu">菜单管理</div>
                <div className="menu">权限管理</div>
            </div>
        </div>;
    }
}