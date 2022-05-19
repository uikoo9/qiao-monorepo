'use strict';

// react
import React from 'react';

// antd
import { Layout, Menu } from 'antd';
const { Header } = Layout;

/**
 * index footer
 */
export default class IndexFooter extends React.Component {
    render() {
        const menus = ['首页', '简介'];

        return (
            <Header
                style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <div className="logo"></div>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={menus.map((_, index) => ({
                        key: String(index + 1),
                        label: _,
                    }))}
                />
            </Header>
        );
    }
}