'use strict';

// q
var q = require('qiao-console');

// vars
var values = require('./_values.js');
var handler = require('./_handler.js');
var callback = require('./_callback.js');
var complete = require('./_complete.js');

// parallel
var parallel = require('../index.js');

// test
(function () {
  q.clear();

  parallel.parallelByIIFE(handler, values, callback, complete);
})();
