"use strict";

var q = require("../index.js");

var test = async function () {
  try {
    var databaseName = "db_test";
    await q.delDB(databaseName);
  } catch (e) {
    console.log(e);
  }
};

test();
