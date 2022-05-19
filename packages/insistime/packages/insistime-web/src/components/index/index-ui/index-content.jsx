'use strict';

// react
import React from 'react';

// antd
import { Layout } from 'antd';
const { Content } = Layout;

/**
 * index footer
 */
export default class IndexFooter extends React.Component {
    render() {
        return (
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                    marginTop: 64,
                }}
            >
                <div
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        minHeight: 1000,
                    }}
                >
                    hello world
                </div>
            </Content>
        );
    }
}