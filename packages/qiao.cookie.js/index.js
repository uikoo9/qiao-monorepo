"use strict";

/**
 * get
 * @param {*} sKey
 * @returns
 */
const get = (sKey) => {
  return (
    decodeURIComponent(
      document.cookie.replace(
        new RegExp(
          "(?:(?:^|.*;)\\s*" +
            encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") +
            "\\s*\\=\\s*([^;]*).*$)|^.*$"
        ),
        "$1"
      )
    ) || null
  );
};

/**
 * set
 * @param {*} sKey
 * @param {*} sValue
 * @param {*} vEnd
 * @param {*} sPath
 * @param {*} sDomain
 * @param {*} bSecure
 * @returns
 */
const set = (sKey, sValue, vEnd, sPath, sDomain, bSecure) => {
  // eslint-disable-next-line
  if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
    return false;
  }
  var sExpires = "";
  if (vEnd) {
    switch (vEnd.constructor) {
      case Number:
        sExpires =
          vEnd === Infinity
            ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
            : "; max-age=" + vEnd;
        break;
      case String:
        sExpires = "; expires=" + vEnd;
        break;
      case Date:
        sExpires = "; expires=" + vEnd.toUTCString();
        break;
    }
  }
  document.cookie =
    encodeURIComponent(sKey) +
    "=" +
    encodeURIComponent(sValue) +
    sExpires +
    (sDomain ? "; domain=" + sDomain : "") +
    (sPath ? "; path=" + sPath : "") +
    (bSecure ? "; secure" : "");
  return true;
};

/**
 * del
 * @param {*} sKey
 * @param {*} sPath
 * @param {*} sDomain
 * @returns
 */
const del = (sKey, sPath, sDomain) => {
  if (!sKey || !has(sKey)) {
    return false;
  }
  document.cookie =
    encodeURIComponent(sKey) +
    "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
    (sDomain ? "; domain=" + sDomain : "") +
    (sPath ? "; path=" + sPath : "");
  return true;
};

/**
 * has
 * @param {*} sKey
 * @returns
 */
const has = (sKey) => {
  return new RegExp(
    "(?:^|;\\s*)" +
      encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") +
      "\\s*\\="
  ).test(document.cookie);
};

/**
 * keys
 * @returns
 */
const keys = () => {
  // eslint-disable-next-line
  var aKeys = document.cookie
    .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "")
    .split(/\s*(?:\=[^;]*)?;\s*/);
  for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
    aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
  }
  return aKeys;
};

exports.del = del;
exports.get = get;
exports.has = has;
exports.keys = keys;
exports.set = set;
