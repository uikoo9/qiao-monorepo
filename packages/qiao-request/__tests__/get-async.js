'use strict';

var q = require('../index.js');

var test = function () {
  var url = 'http://www.baidu.com';
  q.get(
    {
      url: url,
      qs: {
        test: 'test',
      },
    },
    function (err, rs, body) {
      console.log(err, body);
    },
  );
};

test();
