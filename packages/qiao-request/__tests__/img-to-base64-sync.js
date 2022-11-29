"use strict";

var q = require("../index.js");

var test = async function () {
  try {
    var url = "https://www.baidu.com/img/baidu_resultlogo@2.png";
    var res = await q.imgToBase64Sync(url);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
