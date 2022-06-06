# qiao-ui

## black-white

### display

[https://insistime.com/](https://insistime.com/)

### constant

```js
export default {
  logo: "insistime.com",
  github: "Github",
  githubUrl: "https://github.com/uikoo9/qiao-monorepo",
  webTitle: "网页开发",
  webDesc: "PC浏览器网页开发 手机H5页面开发",
  wechatTitle: "微信开发",
  wechatDesc: "微信公众号开发 微信小程序开发",
  adminTitle: "管理系统开发",
  adminDesc: "各种管理系统开发",
  electronTitle: "桌面应用开发",
  electronDesc: "windows桌面应用开发 mac桌面应用开发",
  appTitle: "APP开发",
  appDesc: "iOS APP开发 Android APP开发",
  otherTitle: "其他服务",
  otherDesc: "域名注册 服务器部署等",
  insistime: "insistime.com",
  insistimeSolgan: "坚持，时机，创造，热爱",
  insistimeUrl: "https://insistime.com/",
  beian: "xxx",
  beianUrl: "https://beian.miit.gov.cn/",
};
```

### use

```js
"use strict";

// react
import React from "react";
import { createRoot } from "react-dom/client";

// index-pc
import { BlackWhiteIndexPCContainer } from "qiao-ui";

// index-mobile
import { BlackWhiteIndexMobileContainer } from 'qiao-ui';

/**
 * index view
 */
class IndexView extends React.Component {
  render() {
    const constant = "xxx";

    // index-pc
    return <BlackWhiteIndexPCContainer constant={constant} />;

    // index-mobile
    return <BlackWhiteIndexMobileContainer constant={constant} />;
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<IndexView />);
```