'use strict';

var q = require('../index.js');

var test = function () {
  // var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
  var key = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';

  q.listValues(key, function (err, res) {
    console.log(err, res);
  });
};

test();
