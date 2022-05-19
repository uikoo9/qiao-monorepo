'use strict';

// react
import React from 'react';

// antd
import { Layout } from 'antd';
const { Footer } = Layout;

/**
 * index footer
 */
export default class IndexFooter extends React.Component {
    render() {
        return (
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                insistime.com ©2022
            </Footer>
        );
    }
}