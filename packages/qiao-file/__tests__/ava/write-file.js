// ava
const test = require('ava');

// q
const { writeFile } = require('../../index.js');

// test
test('write file', async (t) => {
  const filePath = './__tests__/1/write-file/1.js';
  const res = await writeFile(filePath, 'test');
  t.true(res);
});
