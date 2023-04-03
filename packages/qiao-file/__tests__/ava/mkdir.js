// ava
const test = require('ava');

// q
const { mkdir } = require('../../index.js');

// test
test('mkdir', async (t) => {
  const dirpath = './__tests__/1/2/3/4';
  const res = await mkdir(dirpath);
  t.true(res);
});
test('mkdir again', async (t) => {
  const dirpath = './__tests__/1/2/3/4';
  const res = await mkdir(dirpath);
  t.true(res);
});
