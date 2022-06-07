'use strict';

// react
import React from 'react';

// index
import IndexContent from './content/content.jsx';
import IndexInfo from './info/info.jsx';
import IndexFooter from './footer/footer.jsx';

// qiao-ui
import {
  MobileHeader
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
        <IndexContent
          constant={this.props.constant}
        />
        <IndexInfo
          constant={this.props.constant}
        />
        <IndexFooter
          constant={this.props.constant}
        />
      </>
    );
  }
}