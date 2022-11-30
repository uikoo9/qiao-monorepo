# qiao-string

## api

### firstLetterUpper

```javascript
'use strict';

var q = require('qiao-string');

var test = function () {
  var str = 'table';
  var s = q.firstLetterUpper(str);

  console.log(s);
};

test();
```

### firstLetterLower

```javascript
'use strict';

var q = require('qiao-string');

var test = function () {
  var str = 'Table';
  var s = q.firstLetterLower(str);

  console.log(s);
};

test();
```

### underScoreCaseToCamelCase

```javascript
'use strict';

var q = require('qiao-string');

var test = function () {
  var str = 'share_type';
  var s = q.underScoreCaseToCamelCase(str);

  console.log(s);
};

test();
```

## version

### 0.0.5.20220422

1. add lerna

### 0.0.4.20191204

1. add funding

### 0.0.3.20190107

1. npm audit

### 0.0.2.20181122

1. npm audit

### 0.0.1.20181107

1. init
