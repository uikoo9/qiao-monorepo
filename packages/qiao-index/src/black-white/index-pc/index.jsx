'use strict';

// react
import React from 'react';

// css
import './index.scss';

// ui
import { Header } from './header/header.jsx';
import { Footer } from './footer/footer.jsx';
import { Content } from './content/content.jsx';
import { InfoList } from './info-list/info-list.jsx';

/**
 * black white index pc container
 */
export class BlackWhiteIndexPCContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <Header
          logo={this.props.constant.logo}
          navs={this.props.constant.navs}
        />
        <Content
          contentName={this.props.constant.contentName}
          contentSolgan={this.props.constant.contentSolgan}
        />
        <InfoList
          infos={this.props.constant.infos}
        />
        <Footer
          companyUrl={this.props.constant.companyUrl}
          companyName={this.props.constant.companyName}
          beianUrl={this.props.constant.beianUrl}
          beianName={this.props.constant.beianName}
        />
      </div>
    );
  }
}