// ava
const test = require('ava');

// path
const path = require('path');

// q
const { isExists } = require('../../index.js');

// test
test('isExists / path not exists', async (t) => {
  const fpath = '/path/not/exists';
  const res = await isExists(fpath);
  t.false(res);
});
test('isExists / path is exists', async (t) => {
  const fpath = path.resolve(__dirname, './is-exists.js');
  const res = await isExists(fpath);
  t.true(res);
});
