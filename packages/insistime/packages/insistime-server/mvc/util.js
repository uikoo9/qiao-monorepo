"use strict";

/**
 * vendor
 */
exports.vendor = function (ua) {
  var vendor = {};
  if (ua) {
    vendor.mobile = /AppleWebKit.*Mobile.*/.test(ua);
    vendor.android = /android/gi.test(ua);
    vendor.ios = /(iphone|ipad|ipod)/gi.test(ua);
    vendor.iphone = /iphone/gi.test(ua);
    vendor.ipad = /ipad/gi.test(ua);
    vendor.ipod = /ipod/gi.test(ua);
    vendor.weixin = /micromessenger/gi.test(ua);
    vendor.qq = / qq/gi.test(ua);
    vendor.qqb = /mqqbrowser/gi.test(ua);
    vendor.weibo = /weibo/gi.test(ua);
    var matched;
    if (
      (matched = ua.match(/MSIE\s([\d\.]+)/)) ||
      (matched = ua.match(/IEMobile\/([\d\.]+)/))
    ) {
      vendor.ie = true;
      vendor.version = matched[1];
    }
  }

  return vendor;
};
