# qiao-index

## black-white

### display

[https://insistime.com/black-white](https://insistime.com/black-white)

### constant

```js
export default {
    logo: 'insistime.com',
    navs: [{
        name: 'Github',
        url: 'https://github.com/uikoo9/qiao-monorepo'
    }],

    contentName: 'insistime.com',
    contentSolgan: '坚持，时机，创造，热爱',

    infos: [{
        title: '网页开发',
        desc: 'PC浏览器网页开发 手机H5页面开发',
    }, {
        title: '微信开发',
        desc: '微信公众号开发 微信小程序开发',
    }, {
        title: '管理系统开发',
        desc: '各种管理系统开发',
    }, {
        title: '桌面应用开发',
        desc: 'windows桌面应用开发 mac桌面应用开发',
    }, {
        title: 'APP开发',
        desc: 'iOS APP开发 Android APP开发',
    }, {
        title: '其他服务',
        desc: '域名注册 服务器部署等',
    }],

    companyName: 'insistime.com',
    companyUrl: 'https://insistime.com/',
    beianName: '京ICP备18041615号-1',
    beianUrl: 'https://beian.miit.gov.cn/',
};
```

### use

```js
"use strict";

// react
import React from "react";
import { createRoot } from "react-dom/client";

// index-pc
import { BlackWhiteIndexPCContainer } from "qiao-index";

// index-mobile
import { BlackWhiteIndexMobileContainer } from 'qiao-index';

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