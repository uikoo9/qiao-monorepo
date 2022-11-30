# qiao-regedit

## api

### addValue

```javascript
'use strict';

var q = require('qiao-regedit');

var test = function () {
  // var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
  var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
  var obj = {
    key: key,
    name: 'test',
    data: 'haha',
  };

  q.addValue(obj, function (res) {
    console.log(res);
  });
};

test();
```

### addValueSync

```javascript
'use strict';

var q = require('qiao-regedit');

var test = async function () {
  try {
    // var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
    var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
    var obj = {
      key: key,
      name: 'test',
      data: 'haha',
    };

    var res = await q.addValueSync(obj);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### delValue

```javascript
'use strict';

var q = require('qiao-regedit');

var test = function () {
  // var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
  var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
  var obj = {
    key: key,
    name: 'test',
  };

  q.delValue(obj, function (res) {
    console.log(res);
  });
};

test();
```

### delValueSync

```javascript
'use strict';

var q = require('qiao-regedit');

var test = async function () {
  try {
    // var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
    var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
    var obj = {
      key: key,
      name: 'test',
    };

    var res = await q.delValueSync(obj);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### listValues

```javascript
'use strict';

var q = require('qiao-regedit');

var test = function () {
  // var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
  var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';

  q.listValues(key, function (err, res) {
    console.log(err, res);
  });
};

test();
```

### listValuesSync

```javascript
'use strict';

var q = require('qiao-regedit');

var test = async function () {
  try {
    // var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
    var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';

    var res = await q.listValuesSync(key);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

## version

### 0.0.4.20220513

1. ncu

### 0.0.3.20200803

1. ncu

### 0.0.2.20200620

1. fix list key space bug
2. string trim

### 0.0.1.20200606

1. init project
2. add value
3. add value sync
4. del value
5. del value sync
6. 兼容中文和空格
7. list values
8. list values sync
