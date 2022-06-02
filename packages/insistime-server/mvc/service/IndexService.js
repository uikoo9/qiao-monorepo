"use strict";

// util
var util = require("../util.js");

/**
 * index
 */
exports.index = function (req, res) {
  var vendor = util.vendor(req.headers["user-agent"]);
  if (vendor.mobile || vendor.android) {
    res.render("index-mobile.html");
  } else {
    res.render("index-pc.html");
  }
};
