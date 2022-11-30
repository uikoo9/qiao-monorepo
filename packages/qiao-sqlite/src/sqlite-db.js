// sqlite3
import sqlite3 from 'sqlite3';

/**
 * createDB
 * @param {*} dbName
 */
export const createDB = (dbName) => {
  if (!dbName) throw new Error('need db name');

  const sqlite = sqlite3.verbose();
  return new sqlite.Database(dbName);
};
