'use strict';

// react
import React from 'react';

// index
import IndexHeader from './header/header.jsx';
import IndexContent from './content/content.jsx';
import IndexInfo from './info/info.jsx';
import { Footer } from 'qiao-ui';

/**
 * index component
 */
export default class IndexComponent extends React.Component {
  render() {
    return (
      <>
        <IndexHeader
          constant={this.props.constant}
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