# qiao-npm
npm package info

## api
### downloadCountsLastDay
```javascript
'use strict';

var q = require('qiao-npm');

var test = async function(){
    try{
        var packageName = 'qiao-cos';
        var res = await q.downloadCountsLastDay(packageName);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();
```

### downloadCountsLastWeek
```javascript
'use strict';

var q = require('qiao-npm');

var test = async function(){
    try{
        var packageName = 'qiao-cos';
        var res = await q.downloadCountsLastWeek(packageName);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();
```

### downloadCountsLastMonth
```javascript
'use strict';

var q = require('qiao-npm');

var test = async function(){
    try{
        var packageName = 'qiao-cos';
        var res = await q.downloadCountsLastMonth(packageName);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();
```

## version
### 0.0.1.20220609
1. init project
2. download counts