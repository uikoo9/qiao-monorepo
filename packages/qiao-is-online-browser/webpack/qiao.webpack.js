"use strict";

// path
var path = require("path");

// template path
var templatePath = path.resolve(__dirname, "./template.html");

/**
 * qiao.webpack.js
 */
module.exports = {
  entry: {
    "is-online": "./__tests__/is-online.js",
    "offline-to-online": "./__tests__/offline-to-online.js",
  },
  output: {
    filename: "[name].js",
    libraryTarget: "window",
    library: "init",
  },
  plugins: [
    // html
    {
      type: "html",
      inject: "body",
      title: "is-online",
      chunks: ["is-online"],
      filename: "is-online.html",
      template: templatePath,
    },
    {
      type: "html",
      inject: "body",
      title: "offline-to-online",
      chunks: ["offline-to-online"],
      filename: "offline-to-online.html",
      template: templatePath,
    },
  ],
};
