// ava
const test = require('ava');

// q
const { isDir } = require('../../index.js');

// test
test('path is dir', async (t) => {
  const res = await isDir('./__tests__');
  t.true(res);
});
test('path not dir', async (t) => {
  const fpath = './__tests__/ava/is-dir.js';
  const res = await isDir(fpath);
  t.false(res);
});
