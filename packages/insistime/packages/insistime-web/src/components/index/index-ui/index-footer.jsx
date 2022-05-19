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
				<a target="_blank" href="https://insistime.com/">insistime.com</a>&nbsp;&nbsp;&nbsp;
				<a target="_blank" href="https://beian.miit.gov.cn/">京ICP备18041615号-1</a>
            </Footer>
        );
    }
}