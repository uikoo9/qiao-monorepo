# qiao-process

## api
### fork & kill
```javascript
'use strict';

// path
var path = require('path');

// qiao
var qiao = require('qiao-process');

var test = function(){
    var jsPath = path.resolve(__dirname, './cp.js');
    var args = ['haha'];

    var cp = qiao.fork(jsPath, args, function(msg){
        console.log(`from child process: ${msg}`);
    }, function(code){
        console.log(`exit code: ${code}`);
    });

    cp.send('hello child process');
    
    // kill cp
    setTimeout(function(){
        qiao.kill(cp.pid);
    }, 3000);
};

test();
```

### onMsg & send
```javascript
'use strict';

// qiao
var qiao = require('qiao-process');

qiao.onMsg(function(msg){
    console.log(`from main process: ${msg}`);
});

qiao.send('hello main process');
```

## version
### 0.0.1.20200807
1. init project
2. fork