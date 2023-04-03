// ava
const test = require('ava');

// q
const { lsdir } = require('../../index.js');

// test
test('ls dir', async (t) => {
  const dirpath = './';
  const res = await lsdir(dirpath);

  t.truthy(res);
});
