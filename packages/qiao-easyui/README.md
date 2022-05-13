# qiao-easyui

## api
### alert
```javascript
'use strict';

var q = require('qiao-easyui');

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
q.alert(options, fn);
```

### confirm
```javascript
'use strict';

var q = require('qiao-easyui');

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
q.confirm(options, fn);
```

### addTab
```javascript
'use strict';

var q = require('qiao-easyui');

/**
 * add tab
 * 	url
 * 	title
 */
q.addTab(url, title);
```

## version
### 0.1.4.20220513
1. lerna

### 0.1.3.20191206
1. add funding

### 0.1.2.20190226
1. click before after search
2. search callbacks

### 0.1.1.20190221
1. click before after edit and add

### 0.1.0.20190126
1. add options.pageList

### 0.0.9.20181219
1. 删除数据时二次确认

### 0.0.8.20181217
1. custom toolbar
2. add confirm

### 0.0.7.20181213
1. datagrid add query

### 0.0.6.20181127
1. del .js

### 0.0.5.20181122
1. update package.json

### 0.0.4.20181119
1. fix alert bug
2. fix check bug

### 0.0.3.20181114
1. crud.init

### 0.0.2.20181114
1. crud.init
2. crud.search
3. crud.reset
4. crud.init add width height 

### 0.0.1.20181107
1. init project
