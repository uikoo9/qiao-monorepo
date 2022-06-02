"use strict";

// path
var path = require("path");

// template path
var indexPath = path.resolve(__dirname, "./template/index-pc.html");
var mobilePath = path.resolve(__dirname, "./template/index-mobile.html");

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
    title: "index",
    chunks: ["index"],
    filename: "../views/index-pc.html",
    publicPath:
      "https://insistime-1252774635.cos.ap-beijing.myqcloud.com/00_insistime/static/",
    template: indexPath,
  },
  {
    type: "html",
    inject: "body",
    title: "mobile",
    chunks: ["mobile"],
    filename: "../views/index-mobile.html",
    publicPath:
      "https://insistime-1252774635.cos.ap-beijing.myqcloud.com/00_insistime/static/",
    template: mobilePath,
  },
];
