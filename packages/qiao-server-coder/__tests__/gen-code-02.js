'use strict';

var coder = require('../codes/02/coder.js');

var test = function () {
  // vars
  var tableName = 't_home_user';
  var destFolder = 'd:/test';

  coder.gen(tableName, destFolder);
};

test();
