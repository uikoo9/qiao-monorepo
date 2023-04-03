// ava
const test = require('ava');

// q
const { cp } = require('../../index.js');

// test
test('copy file', async (t) => {
  const src = './index.js';
  const dest = './__tests__/1/cp/index.js';
  const res = await cp(src, dest);
  t.true(res);
});
test('copy folder', async (t) => {
  const src = './src';
  const dest = './__tests__/1/cp/src';
  const res = await cp(src, dest);
  t.true(res);
});
