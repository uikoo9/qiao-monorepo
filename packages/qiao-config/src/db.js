// data
import { get, set, del, clear, all } from './_data.js';

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

export default db;
