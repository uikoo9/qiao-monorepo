'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var o = require('offline-to-online');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var o__default = /*#__PURE__*/_interopDefaultLegacy(o);

/**
 * 
 * @param {string} src img src
 * @returns {string} 'online' or 'offline'
 * @example
'use strict';

var q = require('qiao-is-online-browser');

var test = async function(){
    try{
        var isOnlineImgSrc = 'your online img src';
        var isOnline = await q.isOnline(isOnlineImgSrc);
        console.log(isOnline);
    }catch(e){
        console.log(e);
    }
};

test();
 */
const isOnline = (src) => {
  return new Promise(function (resolve, reject) {
    if (!src) return reject(Error("need online img src"));

    let img = new Image();
    img.src = `${src}?r=${Math.random()}`;
    img.onload = () => {
      resolve("online");
    };
    img.onerror = () => {
      resolve("offline");
    };
  });
};

/**
 * 
 * @param {string} src img src 
 * @param {function} callback callback function
 * @param {number} time interval time(ms), default is 3*1000ms
 * @example
'use strict';

var q = require('qiao-is-online-browser');

// is online img src
var isOnlineImgSrc = 'your online img src';

// callback
// time, interval time, default is 3*1000ms
q.offlineToOnline(isOnlineImgSrc, function(){
    console.log('offline-to-online');
}, 3 * 1000);
 */
const offlineToOnline = (src, callback, time) => {
  o__default["default"].offlineToOnlineWithSrc(src, isOnline, callback, time);
};

exports.isOnline = isOnline;
exports.offlineToOnline = offlineToOnline;
