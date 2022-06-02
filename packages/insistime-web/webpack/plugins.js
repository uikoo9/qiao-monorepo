"use strict";

// path
var path = require("path");

// template path
var indexPCPath     = path.resolve(__dirname, "./template/index-pc.html");
var indexMobilePath = path.resolve(__dirname, "./template/index-mobile.html");

/**
 * qiao.webpack.js
 */
module.exports = [
  {
    type: "css",
    filename: "[name].css",
    chunkFilename: "[id].css",
    ignoreOrder: true,
  },

  {
    type: "html",
    inject: "body",
    title: "index-pc",
    chunks: ["index-pc"],
    filename: "../views/index-pc.html",
    publicPath:
      "https://insistime-1252774635.cos.ap-beijing.myqcloud.com/00_insistime/static/",
    template: indexPCPath,
  },
  {
    type: "html",
    inject: "body",
    title: "index-mobile",
    chunks: ["index-mobile"],
    filename: "../views/index-mobile.html",
    publicPath:
      "https://insistime-1252774635.cos.ap-beijing.myqcloud.com/00_insistime/static/",
    template: indexMobilePath,
  },
];
