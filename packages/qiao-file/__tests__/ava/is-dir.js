// ava
const test = require('ava');

// path
const path = require('path');

// q
const { isDir } = require('../../index.js');

// test
test('path is dir', async (t) => {
  const res = await isDir(__dirname);
  t.true(res);
});
test('path not dir', async (t) => {
  const fpath = path.resolve(__dirname, './is-dir.js');
  const res = await isDir(fpath);
  t.false(res);
});
