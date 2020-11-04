# qiao.util.console

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

## api
### clear
```javascript
'use strict';

var qiao = require('qiao.util.console');

qiao.clear();
```

### writeLine
```javascript
'use strict';

var qiao = require('qiao.util.console');

qiao.clear();
qiao.writeLine(1, 'hello');
```

### others
```javascript
'use strict';

var qiao = require('qiao.util.console');

// clear line
qiao.clearLine();

// move to
qiao.moveTo(x, y);

// write
qiao.write(msg);

// write line xy
qiao.writeLineXY(x, y, msg);
```

## version
### 0.0.3.20201104
1. modify md
2. add other method

### 0.0.2.20200807
1. modify md

### 0.0.1.20200806
1. init project
2. clear
3. write line