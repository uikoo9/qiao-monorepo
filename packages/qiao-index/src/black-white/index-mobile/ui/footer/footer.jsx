'use strict';

// react
import React from 'react';

// css
import './footer.scss';

/**
 * index footer
 */
export default class IndexFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <a target="_blank" href={this.props.constant.companyUrl}>{this.props.constant.companyName}</a>&nbsp;&nbsp;&nbsp;
        <a target="_blank" href={this.props.constant.beianUrl}>{this.props.constant.beianName}</a>
      </div>
    );
  }
}