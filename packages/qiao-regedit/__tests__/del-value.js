"use strict";

var q = require("../index.js");

var test = function () {
  // var key = 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run';
  var key = "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run";
  var obj = {
    key: key,
    name: "test",
  };

  q.delValue(obj, function (res) {
    console.log(res);
  });
};

test();
