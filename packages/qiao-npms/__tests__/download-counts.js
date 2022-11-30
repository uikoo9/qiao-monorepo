'use strict';

var q = require('../index.js');

var test = async function () {
  try {
    var packageName = 'qiao-cos';
    var res = await q.downloadCounts(packageName, 'last-day');
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
