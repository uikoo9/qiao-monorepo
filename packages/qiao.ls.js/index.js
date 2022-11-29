"use strict";

/**
 * @function ls
 * @param {string} name key
 * @param {any} value value
 * @param {number} expires expiration time ms
 * @example
 * // get localstorage item by key: name
 * ls(name)
 *
 * // set localstorage item by key-value: name-value
 * ls(name, value)
 *
 * // set localstorage item by key-value: name-value, and expiration time: expires ms
 * ls(name, value, expires)
 *
 * // del localstorage item by key: name
 * ls(name, null):
 */
const ls = (name, value, expires) => {
  // remove
  if (value === null) {
    _removeItem(name);
    return;
  }

  // get
  if (typeof value == "undefined") {
    return _getItem(name);
  }

  // set
  _setItem(name, value, expires);
};

// set item
function _setItem(name, value, expires) {
  if (!localStorage) {
    console.log("unsupport localStorage");
    return;
  }

  let obj = {};
  obj.value = value;
  if (expires) obj.expires = Date.now() + expires;

  localStorage.setItem(name, JSON.stringify(obj));
}

// get item
function _getItem(name) {
  if (!localStorage) {
    console.log("unsupport localStorage");
    return;
  }

  const objStr = localStorage.getItem(name);
  let obj;
  try {
    obj = JSON.parse(objStr);
  } catch (e) {
    console.log("json parse error:");
    console.log(e);
  }
  if (!obj) return;

  if (obj.expires && obj.expires < Date.now()) {
    localStorage.removeItem(name);
    return;
  }

  return obj.value;
}

// remove item
function _removeItem(name) {
  if (!localStorage) {
    console.log("unsupport localStorage");
    return;
  }

  localStorage.removeItem(name);
}

// ls

// cache
const cache = (name, key, value, expires) => {
  if (!name) return;

  // clear
  if (key === null) {
    _clearCache(name);
    return;
  }

  // remove
  if (value === null) {
    _removeCache(name, key);
    return;
  }

  // get
  if (typeof value == "undefined") {
    return _getCache(name, key);
  }

  // set
  _setCache(name, key, value, expires);
};

// set cache
function _setCache(name, key, value, exp) {
  if (!localStorage) {
    console.log("unsupport localStorage");
    return;
  }

  if (!name || !key) return;

  let data = ls(name) || {};
  data[key] = value;

  ls(name, data, exp || 7 * 24 * 60 * 60 * 1000);
}

// get cache
function _getCache(name, key) {
  if (!name || !key) return;

  const data = ls(name);
  if (!data) return;

  return data[key];
}

// remove cache
function _removeCache(name, key) {
  if (!name || !key) return;

  let data = ls(name);
  if (!data) return;

  delete data[key];
  ls(name, data);
}

// clear cache
function _clearCache(name) {
  if (!name) return;

  ls(name, null);
}

exports.cache = cache;
exports.ls = ls;
