'use strict';

// react
import React from 'react';

// index
import './index.scss';
import IndexHeader from './index-header.jsx';
import IndexContent from './index-content.jsx';
import IndexInfo from './index-info.jsx';
import IndexFooter from './index-footer.jsx';

/**
 * index component
 */
export default class IndexComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <IndexHeader/>
        <IndexContent/>
        <IndexInfo/>
        <IndexFooter/>
      </div>
    );
  }
}