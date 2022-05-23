'use strict';

// react
import React from 'react';

// css
import './index-info.scss';

/**
 * index info
 */
export default class IndexInfo extends React.Component {
  render() {
    return (
      <div className="info">
          <div className="row top">
            <div className="col">
              <div className="main">{this.props.constant.webTitle}</div>
              <div className="other">{this.props.constant.webDesc}</div>
            </div>
            <div className="col">
              <div className="main">{this.props.constant.wechatTitle}</div>
              <div className="other">{this.props.constant.wechatDesc}</div>
            </div>
            <div className="col">
              <div className="main">{this.props.constant.adminTitle}</div>
              <div className="other">{this.props.constant.adminDesc}</div>
            </div>
          </div>
          <div className="row bottom">
            <div className="col">
              <div className="main">{this.props.constant.electronTitle}</div>
              <div className="other">{this.props.constant.electronDesc}</div>
            </div>
            <div className="col">
              <div className="main">{this.props.constant.appTitle}</div>
              <div className="other">{this.props.constant.appDesc}</div>
            </div>
            <div className="col">
              <div className="main">{this.props.constant.otherTitle}</div>
              <div className="other">{this.props.constant.otherDesc}</div>
            </div>
          </div>
      </div>
    );
  }
}