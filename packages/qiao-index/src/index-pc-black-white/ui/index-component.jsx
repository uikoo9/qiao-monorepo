'use strict';

// react
import React from 'react';

// index
import IndexHeader from './header/header.jsx';
import IndexContent from './content/content.jsx';
import IndexInfo from './info/info.jsx';
import IndexFooter from './footer/footer.jsx';

/**
 * index component
 */
export default class IndexComponent extends React.Component {
  render() {
    return (
      <>
        <IndexHeader
          constant = {this.props.constant}
        />
        <IndexContent
          constant = {this.props.constant}
        />
        <IndexInfo
          constant = {this.props.constant}
        />
        <IndexFooter
          constant = {this.props.constant}
        />
      </>
    );
  }
}