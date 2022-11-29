"use strict";

// q
var q = require("../index.js");

// url
var url = "https://baidu.com/";

// canvas
q.qrcodeCanvas("canvas", url);

// img
q.qrcodeImg("img", url);

// svg
q.qrcodeSvg("svg", url);
