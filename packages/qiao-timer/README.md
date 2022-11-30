# qiao-timer

## api

### cron

```javascript
'use strict';

var q = require('qiao-timer');

var test = function () {
  var cron = q.cron;
  console.log(cron);
};

test();
```

### job

```javascript
'use strict';

var q = require('qiao-timer');

var test = function () {
  var time = '*/1 * * * * *';
  var tick = function () {
    console.log(new Date());
  };

  var job = q.job(time, tick);
  console.log(job);
};

test();
```

### run

```javascript
'use strict';

var q = require('qiao-timer');

var test = function () {
  var time = '*/1 * * * * *';
  var tick = function () {
    console.log(new Date());
  };

  console.log('-' + new Date());
  var job = q.run(time, tick);
};

test();
```

### runAndInit

```javascript
'use strict';

var q = require('qiao-timer');

var test = function () {
  var time = '*/1 * * * * *';
  var tick = function () {
    console.log(new Date());
  };

  console.log('-' + new Date());
  var job = q.runAndInit(time, tick);
};

test();
```

## version

### 0.0.4.20220422

1. add lerna

### 0.0.3.20200803

1. ncu

### 0.0.2.20191204

1. update packages
2. add funding

### 0.0.1.20190107

1. init
2. add cron method
3. add job method
4. add run method
5. add runAndInit method
6. nodejs timer tool
