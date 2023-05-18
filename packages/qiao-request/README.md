# qiao-request

## api

### getSync

```javascript
'use strict';

var q = require('qiao-request');

var test = async function () {
  try {
    var url = 'http://www.baidu.com';
    var res = await q.getSync({
      url: url,
      qs: {
        test: 'test',
      },
    });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### postSync

```javascript
'use strict';

var q = require('qiao-request');

var test = async function () {
  try {
    var url = 'http://www.baidu.com';
    var res = await q.postSync({
      url: url,
      qs: {
        test: 'test',
      },
    });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### putSync

```javascript
'use strict';

var q = require('qiao-request');

var test = async function () {
  try {
    var url = 'http://10.33.12.68:8002/put';
    var res = await q.putSync({
      url: url,
    });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### patchSync

```javascript
'use strict';

var q = require('qiao-request');

var test = async function () {
  try {
    var url = 'http://10.33.12.68:8002/patch';
    var res = await q.patchSync({
      url: url,
    });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### deleteSync

```javascript
'use strict';

var q = require('qiao-request');

var test = async function () {
  try {
    var url = 'http://10.33.12.68:8002/delete';
    var res = await q.deleteSync({
      url: url,
    });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### headSync

```javascript
'use strict';

var q = require('qiao-request');

var test = async function () {
  try {
    var url = 'http://10.33.12.68:8002/head';
    var res = await q.headSync({
      url: url,
    });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### optionsSync

```javascript
'use strict';

var q = require('qiao-request');

var test = async function () {
  try {
    var url = 'http://10.33.12.68:8002/options';
    var res = await q.optionsSync({
      url: url,
    });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### get

```javascript
'use strict';

var q = require('qiao-request');

var test = function () {
  var url = 'http://www.baidu.com';
  q.get(
    {
      url: url,
      qs: {
        test: 'test',
      },
    },
    function (err, rs, body) {
      console.log(err, body);
    },
  );
};

test();
```

### post

```javascript
'use strict';

var q = require('qiao-request');

var test = function () {
  var url = 'http://www.baidu.com';
  q.post(
    {
      url: url,
      qs: {
        test: 'test',
      },
    },
    function (err, rs, body) {
      console.log(err, body);
    },
  );
};

test();
```

### put

```javascript
'use strict';

var q = require('qiao-request');

var test = function () {
  var url = 'http://10.33.12.68:8002/put';
  q.put(
    {
      url: url,
    },
    function (err, rs, body) {
      console.log(err, body);
    },
  );
};

test();
```

### patch

```javascript
'use strict';

var q = require('qiao-request');

var test = function () {
  var url = 'http://10.33.12.68:8002/patch';
  q.patch(
    {
      url: url,
    },
    function (err, rs, body) {
      console.log(err, body);
    },
  );
};

test();
```

### delete

```javascript
'use strict';

var q = require('qiao-request');

var test = function () {
  var url = 'http://10.33.12.68:8002/delete';
  q.delete(
    {
      url: url,
    },
    function (err, rs, body) {
      console.log(err, body);
    },
  );
};

test();
```

### head

```javascript
'use strict';

var q = require('qiao-request');

var test = function () {
  var url = 'http://10.33.12.68:8002/head';
  q.head(
    {
      url: url,
    },
    function (err, rs, body) {
      console.log(err, rs.headers);
    },
  );
};

test();
```

### options

```javascript
'use strict';

var q = require('qiao-request');

var test = function () {
  var url = 'http://10.33.12.68:8002/options';
  q.options(
    {
      url: url,
    },
    function (err, rs, body) {
      console.log(err, body);
    },
  );
};

test();
```

### download

```javascript
'use strict';

var q = require('qiao-request');

var test = async function () {
  try {
    var url = 'https://www.baidu.com/img/bd_logo1.png';
    var path = 'd:/test.png';

    await q.download(url, path);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### imgToBase64

```javascript
'use strict';

var q = require('qiao-request');

var test = function () {
  var url = 'https://www.baidu.com/img/baidu_resultlogo@2.png';
  q.imgToBase64(url, function (res) {
    console.log(res);
  });
};

test();
```

### imgToBase64Sync

```javascript
'use strict';

var q = require('qiao-request');

var test = async function () {
  try {
    var url = 'https://www.baidu.com/img/baidu_resultlogo@2.png';
    var res = await q.imgToBase64Sync(url);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```
