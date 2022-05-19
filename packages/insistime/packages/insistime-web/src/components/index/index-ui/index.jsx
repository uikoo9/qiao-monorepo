'use strict';

// react
import React from 'react';

// antd
import { Layout } from 'antd';

// index
import './index.scss';
import IndexHeader from './index-header.jsx';
import IndexContent from './index-content.jsx';
import IndexFooter from './index-footer.jsx';

/**
 * index component
 */
export default class IndexComponent extends React.Component {
  render() {
    return (
      <Layout>
        <IndexHeader/>
        <IndexContent/>
        <IndexFooter/>
      </Layout>
    );
  }
}