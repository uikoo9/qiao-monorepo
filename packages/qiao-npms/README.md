# qiao-npms
npm package info

1. download counts, by [https://github.com/npm/registry/blob/master/docs/download-counts.md](https://github.com/npm/registry/blob/master/docs/download-counts.md)

## api
### downloadCountsLastDay
```js
'use strict';

var q = require('qiao-npms');

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

return
```js
{
  downloads: 0,
  start: '2022-06-08',
  end: '2022-06-08',
  package: 'qiao-cos'
}
```

### downloadCountsLastWeek
```js
'use strict';

var q = require('qiao-npms');

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

return
```js
{
  downloads: 80,
  start: '2022-06-02',
  end: '2022-06-08',
  package: 'qiao-cos'
}
```

### downloadCountsLastMonth
```js
'use strict';

var q = require('qiao-npms');

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

return
```js
{
  downloads: 763,
  start: '2022-05-10',
  end: '2022-06-08',
  package: 'qiao-cos'
}
```

### downloadCounts
```js
'use strict';

var q = require('qiao-npms');

var test = async function(){
    try{
        var packageName = 'qiao-cos';
        var res = await q.downloadCounts(packageName, 'last-day');
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();
```

return
```js
{
  downloads: 0,
  start: '2022-06-08',
  end: '2022-06-08',
  package: 'qiao-cos'
}
```

### searchPackages
```js
'use strict';

var q = require('qiao-npms');

var test = async function(){
    try{
        var packageName = 'qiao-cos';
        var res = await q.searchPackages(packageName);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();
```

return
```js
[
  {
    name: 'qiao-cos',
    scope: 'unscoped',
    version: '0.4.3',
    description: 'tencent cos upload tool on nodejs',
    keywords: [ 'tencent', 'cos', 'upload', 'tool', 'nodejs' ],
    date: 2022-06-13T08:06:26.354Z,
    links: {
      npm: 'https://www.npmjs.com/package/qiao-cos',
      homepage: 'https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-cos#readme',
      repository: 'https://github.com/uikoo9/qiao-monorepo',
      bugs: 'https://github.com/uikoo9/qiao-monorepo/issues'
    },
    author: { name: 'uikoo9', email: 'uikoo9@qq.com' },
    publisher: { username: 'npm_insistime', email: 'npm@insistime.com' },
    maintainers: [ [Object] ]
  }
]
```

## version
### 0.0.1.20220609
1. init project
2. download counts