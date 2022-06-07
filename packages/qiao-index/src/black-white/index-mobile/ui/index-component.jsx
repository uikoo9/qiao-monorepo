'use strict';

// react
import React from 'react';

// index
import IndexInfo from './info/info.jsx';

// qiao-ui
import {
  MobileHeader,
  MobileFooter,
  MobileContent,
} from 'qiao-ui';

/**
 * index component
 */
export default class IndexComponent extends React.Component {
  render() {
    return (
      <>
        <MobileHeader
          logo={this.props.constant.logo}
          navs={this.props.constant.navs}
        />
        <MobileContent
          contentName={this.props.constant.contentName}
          contentSolgan={this.props.constant.contentSolgan}
        />
        <IndexInfo
          constant={this.props.constant}
        />
        <MobileFooter
          companyUrl={this.props.constant.companyUrl}
          companyName={this.props.constant.companyName}
          beianUrl={this.props.constant.beianUrl}
          beianName={this.props.constant.beianName}
        />
      </>
    );
  }
}