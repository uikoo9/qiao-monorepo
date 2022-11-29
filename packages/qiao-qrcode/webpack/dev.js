"use strict";

// path
var path = require("path");

// dist path
var distPath = path.resolve(__dirname, "../dist");

/**
 * dev server
 */
module.exports = {
  port: 8080,
  static: distPath,
};
