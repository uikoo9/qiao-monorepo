"use strict";

var coder = require("../codes/01/coder.js");

var test = function () {
  // vars
  var tableName = "t_blog_type";
  var destFolder = "d:/test";

  coder.gen(tableName, destFolder);
};

test();
