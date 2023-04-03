// ava
const test = require('ava');

// q
const { readFile } = require('../../index.js');

// test
test('read file', async (t) => {
  const filePath = './index.js';
  const res = await readFile(filePath);
  t.truthy(res);
});
