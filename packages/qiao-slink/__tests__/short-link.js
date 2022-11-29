"use strict";

var q = require("../index.js");

var test = async function () {
  try {
    var longLink = "https://baidu.com/";
    var shortLink = await q.shortLink(longLink);
    console.log(shortLink);
  } catch (e) {
    console.log(e);
  }
};

test();
