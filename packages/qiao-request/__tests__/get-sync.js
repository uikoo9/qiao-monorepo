'use strict';

var q = require('../index.js');

var test = async function () {
  try {
    var url = 'http://www.baidu.com';
    var res = await q.getSync({
      url: url,
      qs: {
        test: 'test',
      },
    });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
