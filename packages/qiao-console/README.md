# qiao-console

## api
### clear
```javascript
'use strict';

var q = require('qiao-console');

q.clear();
```

### writeLine
```javascript
'use strict';

var q = require('qiao-console');

q.clear();
q.writeLine(1, 'hello');
```

### others
```javascript
'use strict';

var q = require('qiao-console');

// clear line
q.clearLine();

// move to
q.moveTo(x, y);

// write
q.write(msg);

// write line xy
q.writeLineXY(x, y, msg);
```

## version
### 0.0.5.20220422
1. add lerna

### 0.0.4.20210318
1. modify md

### 0.0.3.20201104
1. modify md
2. add other method

### 0.0.2.20200807
1. modify md

### 0.0.1.20200806
1. init project
2. clear
3. write line