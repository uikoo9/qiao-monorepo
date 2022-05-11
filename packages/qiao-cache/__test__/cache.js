'use strict';

var q = require('../index.js');

// set
q.cache('test', 'hello');

// get
var s = q.cache('test');
console.log(s); // hello

// del
q.cache('test', null);
console.log(q.cache('test')); // undefined