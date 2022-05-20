'use strict';

// react
import React from 'react';

/**
 * index info
 */
export default class IndexInfo extends React.Component {
  render() {
    return (
      <div className="info">
          <div className="row top">
            <div className="col">
              <div className="main">网页开发</div>
              <div className="other">PC浏览器网页开发 手机H5页面开发</div>
            </div>
            <div className="col">
              <div className="main">微信开发</div>
              <div className="other">微信公众号开发 微信小程序开发</div>
            </div>
            <div className="col">
              <div className="main">管理系统开发</div>
              <div className="other">各种管理系统开发</div>
            </div>
          </div>
          <div className="row bottom">
            <div className="col">
              <div className="main">桌面应用开发</div>
              <div className="other">windows桌面应用开发 mac桌面应用开发</div>
            </div>
            <div className="col">
              <div className="main">APP开发</div>
              <div className="other">iOS APP开发 Android APP开发</div>
            </div>
            <div className="col">
              <div className="main">其他服务</div>
              <div className="other">域名注册 服务器部署等</div>
            </div>
          </div>
      </div>
    );
  }
}