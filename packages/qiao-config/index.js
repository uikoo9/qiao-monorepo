'use strict';

var path = require('path');
var fs = require('fs');

// fs

/**
 * write file
 * @param {*} filePath
 * @param {*} data
 */
const writeFile = (filePath, data) => {
  fs.writeFileSync(filePath, data);
};

/**
 * read file
 * @param {*} filePath
 * @returns
 */
const readFile = (filePath) => {
  try {
    // not exists write file
    if (!isExists(filePath)) writeFile(filePath, '');

    return fs.readFileSync(filePath, { encoding: 'utf8' });
  } catch (e) {
    return null;
  }
};

// is exists
function isExists(filePath) {
  try {
    fs.accessSync(filePath);

    return true;
  } catch (e) {
    return false;
  }
}

// io

/**
 * clear
 * @param {*} filePath
 * @returns
 */
const clear = (filePath) => {
  // check
  if (!filePath) {
    console.log('qiao-config:clear, need path');
    return;
  }

  // io
  try {
    writeFile(filePath, '');
  } catch (e) {
    console.log(`qiao-config:clear, write file error ${e.message}`);
  }
};

/**
 * all
 * @param {*} filePath
 * @returns
 */
const all = (filePath) => {
  // check
  if (!filePath) {
    console.log('qiao-config:all, need path');
    return;
  }

  let json;
  try {
    const jsonStr = readFile(filePath);

    json = JSON.parse(jsonStr);
  } catch (e) {
    json = {};
  }

  return json;
};

/**
 * get
 * @param {*} filePath
 * @param {*} key
 * @returns
 */
const get = (filePath, key) => {
  // check
  if (!filePath) {
    console.log('qiao-config:get, need path');
    return;
  }
  if (typeof key == 'undefined') {
    console.log('qiao-config:get, need key');
    return;
  }

  // get
  const json = all(filePath);
  return json[key];
};

/**
 * set
 * @param {*} filePath
 * @param {*} key
 * @param {*} value
 * @returns
 */
const set = (filePath, key, value) => {
  // check
  if (!filePath) {
    console.log('qiao-config:set, need path');
    return;
  }
  if (typeof key == 'undefined') {
    console.log('qiao-config:set, need key');
    return;
  }

  // set
  const json = all(filePath);
  json[key] = value;

  // io
  try {
    writeFile(filePath, JSON.stringify(json));
  } catch (e) {
    console.log(`qiao-config:set, write file error ${e.message}`);
  }
};

/**
 * del
 * @param {*} filePath
 * @param {*} key
 * @returns
 */
const del = (filePath, key) => {
  // check
  if (!filePath) {
    console.log('qiao-config:del, need path');
    return;
  }
  if (typeof key == 'undefined') {
    console.log('qiao-config:del, need key');
    return;
  }

  // get
  const v = get(filePath, key);
  if (!v) return;

  // del
  const json = all(filePath);
  delete json[key];

  // io
  try {
    writeFile(filePath, JSON.stringify(json));
  } catch (e) {
    console.log(`qiao-config:del, write file error ${e.message}`);
  }
};

// data

/**
 * db
 * @param {*} dbPath
 */
const db = (dbPath) => {
  const obj = {};

  obj.path = dbPath;

  // clear
  obj.clear = () => {
    clearDB(obj.path);
  };

  // all
  obj.all = () => {
    return listDB(obj.path);
  };

  // config
  obj.config = (key, value) => {
    return configDB(obj.path, key, value);
  };

  return obj;
};

// clear db
function clearDB(filePath) {
  clear(filePath);
}

// list db
function listDB(filePath) {
  return all(filePath);
}

// config db
function configDB(filePath, key, value) {
  // remove
  if (value === null) {
    del(filePath, key);
    return;
  }

  // get
  if (typeof value == 'undefined') {
    return get(filePath, key);
  }

  // set
  set(filePath, key, value);
}

// path

/**
 * qiao config
 */
var index = (filePath) => {
  // path
  const defaultPath = path.resolve(__dirname, './config.json');
  const finalPath = !filePath ? defaultPath : path.resolve(process.cwd(), filePath);

  // db
  return db(finalPath);
};

module.exports = index;
