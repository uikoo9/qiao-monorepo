'use strict';

var q = require('../index.js');

var test = async function () {
  var isOnline = await q.isOnline();
  console.log(isOnline);
};

test();
