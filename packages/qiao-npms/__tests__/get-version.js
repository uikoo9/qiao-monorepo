'use strict';

var q = require('../index.js');

var test = async function () {
  try {
    var packageName = 'qiao-qrcode';
    var res = await q.getVersion(packageName);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
