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

var qiaoFeEasyui = require('qiao.fe.easyui');

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

## confirm
```javascript
'use strict';

var qiaoFeEasyui = require('qiao.fe.easyui');

/**
 * confirm
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
qiaoFeEasyui.confirm(options, fn);
```

## addTab
```javascript
'use strict';

var qiaoFeEasyui = require('qiao.fe.easyui');

/**
 * add tab
 * 	url
 * 	title
 */
qiaoFeEasyui.addTab(url, title);
```

# version
## 0.1.1.20190226
1. click before after search

## 0.1.0.20190221
1. click before after edit and add

## 0.0.9.20190126
1. add options.pageList

## 0.0.8.20181219
1. 删除数据时二次确认

## 0.0.7.20181217
1. custom toolbar
2. add confirm

## 0.0.6.20181213
1. datagrid add query

## 0.0.5.20181127
1. del .js

## 0.0.4.20181122
1. update package.json

## 0.0.3.20181119
1. fix alert bug
2. fix check bug

## 0.0.2.20181114
1. crud.init

## 0.0.2.20181114
1. crud.init
2. crud.search
3. crud.reset
4. crud.init add width height 

## 0.0.1.20181107
1. init project