# qiao-json

## api
### json
```javascript
'use strict';

var q = require('qiao-json');

var json = q.json('success', 'test', {});
console.log(json);
```

### success
```javascript
'use strict';

var q = require('qiao-json');

var success = q.success('test', {});
console.log(success);
```

### info
```javascript
'use strict';

var q = require('qiao-json');

var info = q.info('test', {});
console.log(info);
```

### warning
```javascript
'use strict';

var q = require('qiao-json');

var warning = q.warning('test', {});
console.log(warning);
```

### danger
```javascript
'use strict';

var q = require('qiao-json');

var danger = q.danger('test', {});
console.log(danger);
```

## version
### 0.0.6.20220417
1. add lerna

### 0.0.5.20220407
1. md

### 0.0.4.20191204
1. add funding

### 0.0.3.20181127
1. add .js

### 0.0.2.20181122
1. npm audit

### 0.0.1.20181113
1. init
