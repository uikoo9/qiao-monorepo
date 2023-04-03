// ava
const test = require('ava');

// q
const { readDir } = require('../../index.js');

// test
test('read dir', async (t) => {
  const dirpath = './__tests__';
  const res = await readDir(dirpath);
  t.log(res);
  t.truthy(res);
});
