// ava
const test = require('ava');

// q
const { mkdir, mv } = require('../../index.js');

// test
test.before(async (t) => {
  const dirpath = './__tests__/1/mv';
  const res = await mkdir(dirpath);
  t.log('mkdir', res);
});
test('mv', async (t) => {
  const res = await mv('./__tests__/1/mv', './__tests__/1/xx/mv');
  t.true(res);
});
