'use strict';

var q = require('../index.js');

var test = function () {
  var time = '*/1 * * * * *';
  var tick = function () {
    console.log(new Date());
  };

  var job = q.job(time, tick);
  console.log(job);
};

test();
