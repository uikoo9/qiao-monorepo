'use strict';

// react
import React from 'react';

// css
import './index.scss';

// qiao-ui
import {
  MobileHeader,
  MobileFooter,
  MobileContent,
  MobileInfoList,
} from 'qiao-ui';

/**
 * black white index mobile container
 */
export class BlackWhiteIndexMobileContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <MobileHeader
          logo={this.props.constant.logo}
          navs={this.props.constant.navs}
        />
        <MobileContent
          contentName={this.props.constant.contentName}
          contentSolgan={this.props.constant.contentSolgan}
        />
        <MobileInfoList
          infos={this.props.constant.infos}
        />
        <MobileFooter
          companyUrl={this.props.constant.companyUrl}
          companyName={this.props.constant.companyName}
          beianUrl={this.props.constant.beianUrl}
          beianName={this.props.constant.beianName}
        />
      </div>
    );
  }
}