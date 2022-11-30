'use strict';

var q = require('../../index.js');

var seed = '0123456789';
for (var i = 0; i < 10; i++) console.log(q.randomBySeed(seed));
