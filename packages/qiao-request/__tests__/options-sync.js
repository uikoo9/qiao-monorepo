"use strict";

var q = require("../index.js");

var test = async function () {
  try {
    var url = "http://10.33.12.68:8002/options";
    var res = await q.optionsSync({
      url: url,
    });

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
