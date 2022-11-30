'use strict';

var q = require('../index.js');

var test = function () {
  var str = 'Table';
  var s = q.firstLetterLower(str);

  console.log(s);
};

test();
