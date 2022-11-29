"use strict";

var q = require("../index.js");

var test = function () {
  var templateFile = "d:/test/test.art";
  var templateData = { name: "test" };
  var destFile = "d:/test/test.html";

  q.genFileByData(templateFile, templateData, destFile);
};

test();
