# qiao-cache

nodejs memory cache

## api

### cache

```javascript
"use strict";

var q = require("qiao-cache");

// set
q.cache("test", "hello");

// get
var s = q.cache("test");
console.log(s); // hello

// del
q.cache("test", null);
console.log(q.cache("test")); // undefined
```

## version

### 0.0.2.20220511

1. md

### 0.0.1.20201106

1. init project
