'use strict';

var q = require('../lib/qiao-cache');

var _c = q.c();

// set
_c.config('test', 'hello');
console.log(_c.all()); // { test: 'hello' }

// get
var s = _c.config('test');
console.log(s); // hello

// del
_c.config('test', null);
console.log(_c.all()); // {}