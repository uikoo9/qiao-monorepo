'use strict';

// react
import React from 'react';

// css
import './index-info.scss';

// constant
import Constant from '@components/index/_constant.js';

/**
 * index info
 */
export default class IndexInfo extends React.Component {
  render() {
    return (
      <div className="info">
          <div className="row top">
            <div className="col">
              <div className="main">{Constant.webTitle}</div>
              <div className="other">{Constant.webDesc}</div>
            </div>
            <div className="col">
              <div className="main">{Constant.wechatTitle}</div>
              <div className="other">{Constant.wechatDesc}</div>
            </div>
            <div className="col">
              <div className="main">{Constant.adminTitle}</div>
              <div className="other">{Constant.adminDesc}</div>
            </div>
          </div>
          <div className="row bottom">
            <div className="col">
              <div className="main">{Constant.electronTitle}</div>
              <div className="other">{Constant.electronDesc}</div>
            </div>
            <div className="col">
              <div className="main">{Constant.appTitle}</div>
              <div className="other">{Constant.appDesc}</div>
            </div>
            <div className="col">
              <div className="main">{Constant.otherTitle}</div>
              <div className="other">{Constant.otherDesc}</div>
            </div>
          </div>
      </div>
    );
  }
}