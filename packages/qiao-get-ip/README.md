# api
## get
```javascript
'use strict';

var q = require('qiao-ajax');

var test = async function(){
    try{
        var url = 'http://icanhazip.com/';
        var res = await q.get(url);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();
```

# version
## 0.0.1.20200819
1. init project
2. http method
3. qiao-ajax