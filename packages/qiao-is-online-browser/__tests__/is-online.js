"use strict";

var q = require("../index.js");

var test = async function () {
  try {
    var isOnlineImgSrc = "http://www.baidu.com/img/flexible/logo/pc/result.png";
    var isOnline = await q.isOnline(isOnlineImgSrc);
    console.log(isOnline);
  } catch (e) {
    console.log(e);
  }
};

test();
