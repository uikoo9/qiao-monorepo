'use strict';

// q
var q = require('qiao-console');

// vars
var values = require('./_values.js');
var callback = require('./_callback.js');
var complete = require('./_complete.js');

// parallel
var parallel = require('../index.js');

// test
(function () {
  q.clear();

  var jsPath = require('path').resolve(__dirname, './fork-handler.js');
  parallel.parallelByFork(jsPath, values, callback, complete);
})();
