// react
import React from 'react';

// css
import './index.scss';

// ui
import {
    Header,
    Footer,
    Content,
    InfoList,
} from 'qiao-ui';

/**
 * index pc container
 */
export class IndexPCContainer extends React.Component {
  render() {
    console.log('insistime-web/index-pc-container: render');

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