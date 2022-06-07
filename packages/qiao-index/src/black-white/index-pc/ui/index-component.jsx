'use strict';

// react
import React from 'react';

// index
import IndexContent from './content/content.jsx';
import IndexInfo from './info/info.jsx';

// qiao-ui
import { Header, Footer } from 'qiao-ui';

/**
 * index component
 */
export default class IndexComponent extends React.Component {
  render() {
    return (
      <>
        <Header
          logo={this.props.constant.logo}
          navs={this.props.constant.navs}
        />
        <IndexContent
          constant={this.props.constant}
        />
        <IndexInfo
          constant={this.props.constant}
        />
        <Footer
          companyUrl={this.props.constant.companyUrl}
          companyName={this.props.constant.companyName}
          beianUrl={this.props.constant.beianUrl}
          beianName={this.props.constant.beianName}
        />
      </>
    );
  }
}