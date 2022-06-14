'use strict';

// util
var util = require('../util.js');

/**
 * black white
 */
exports.blackWhite = function (req, res) {
  var vendor = util.vendor(req.headers['user-agent']);
  if (vendor.mobile || vendor.android) {
    res.render('black-white/index-mobile.html');
  } else {
    res.render('black-white/index-pc.html');
  }
};

/**
 * black white login
 */
 exports.blackWhiteLogin = function (req, res) {
  res.render('black-white/login.html');
};