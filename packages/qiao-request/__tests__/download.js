'use strict';

var q = require('../index.js');

var test = async function () {
  try {
    var url = 'https://www.baidu.com/img/bd_logo1.png';
    var path = './test.png';

    await q.download(url, path);
  } catch (e) {
    console.log(e);
  }
};

test();
