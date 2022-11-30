'use strict';

var q = require('../../index.js');

var min = 0;
var max = 9;
for (var i = 0; i < 10; i++) console.log(q.randomIn(min, max));
