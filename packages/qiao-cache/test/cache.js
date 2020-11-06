'use strict';

var q = require('../lib/qiao-cache');

// set
q.cache('test', 'hello');

// get
var s = q.cache('test');
console.log(s); // hello

// del
q.cache('test', null);
console.log(q.cache('test')); // undefined