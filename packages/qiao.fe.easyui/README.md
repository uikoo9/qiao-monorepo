# urls
## homepage
[https://code.insistime.com/qiao.fe.easyui](https://code.insistime.com/qiao.fe.easyui)

## github
[https://github.com/insistime/qiao.fe.easyui](https://github.com/insistime/qiao.fe.easyui)

## npm
[https://www.npmjs.com/package/qiao.fe.easyui](https://www.npmjs.com/package/qiao.fe.easyui)

# started
## install
npm install qiao.fe.easyui

## dependencies
1. jquery@1.12.4
2. easyui@1.6.7
3. coolie@2.7.5

## documentation
1. jquery, http://jquery.com/
2. easyui, http://www.jeasyui.com/
3. coolie, https://coolie.ydr.me/

# api
## alert
```javascript
'use strict';

var qiaoFeEasyui = require('qiao.fe.easyui.js');

/**
 * alert
 * 	options, msg
 * 	fn, callback
 * 
 * 	or
 * 
 * 	options.msg
 * 	options.title
 * 	options.icon: error,question,info,warning.
 * 	options.fn
 */
qiaoFeEasyui.alert(options, fn);
```

## addTab
```javascript
'use strict';

var qiaoFeEasyui = require('../lib/qiao.fe.easyui.js');

/**
 * add tab
 * 	url
 * 	title
 */
qiaoFeEasyui.addTab(url, title);
```

# version
## 0.0.2.20181114
1. crud.init
2. crud.search
3. crud.reset
4. crud.init add width height 

## 0.0.1.20181107
1. init project