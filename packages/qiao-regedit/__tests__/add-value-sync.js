'use strict';

var q = require('../index.js');

var test = async function () {
  try {
    // var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
    var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
    var obj = {
      key: key,
      name: 'test',
      data: 'haha',
    };

    var res = await q.addValueSync(obj);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
