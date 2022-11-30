'use strict';

var q = require('../src/index.js');

var test = async function () {
  try {
    var url = 'http://icanhazip.com/';
    var res = await q.get(url);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
