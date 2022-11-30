'use strict';

// q
var q = require('qiao-console');

// vars
var values = require('./_values.js');
var handler = require('./_handler.js');
var callback = require('./_callback.js');
var complete = require('./_complete.js');

// normal
async function normal() {
  console.time('qiao-parallel');

  for (var i = 0; i < values.length; i++) {
    var value = values[i];

    var res = await handler(value);
    callback(i, res);
  }
  complete(values.length);

  console.timeEnd('qiao-parallel');
}

// test
(function () {
  q.clear();

  normal();
})();
