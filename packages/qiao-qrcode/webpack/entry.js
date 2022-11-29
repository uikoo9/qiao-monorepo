"use strict";

// path
var path = require("path");

// qrcode path
var qrcodePath = path.resolve(__dirname, "../__tests__/qrcode.js");

// entry
module.exports = {
  qrcode: qrcodePath,
};
