// ava
const test = require('ava');

// q
const { rm } = require('../index.js');

// test
test('path is dir', async (t) => {
  const res = await rm(__dirname);
  t.true(res);
});
test('rm', async () => {
  const res = await rm('./__tests__ copy');
  expect(res).toBeTruthy();
});
