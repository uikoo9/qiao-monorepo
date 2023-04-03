// ava
const test = require('ava');

// q
const { mkdir, rm } = require('../../index.js');

// test
test.before(async (t) => {
  const dirpath = './__tests__/1/rmdir';
  const res = await mkdir(dirpath);
  t.log('mkdir', res);
});
test('rm dir', async (t) => {
  const dirpath = './__tests__/1/rmdir';
  const res = await rm(dirpath);
  t.true(res);
});
