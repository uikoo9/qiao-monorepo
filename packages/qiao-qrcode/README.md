# qiao-qrcode

## api
### qrcode
```javascript
'use strict';

// q
var q = require('qiao-qrcode');

// url
var url = 'https://baidu.com/';

// canvas
q.qrcode({
    type: 'canvas',
    id: 'canvas',
    text: url
});

// img
q.qrcode({
    type: 'img',
    id: 'img',
    text: url
});

// svg
q.qrcode({
    type: 'svg',
    id: 'svg',
    text: url
});
```

## version
### 0.0.2.20220415
1. add lerna

### 0.0.1.20220414
1. init project