// q
const { readFile } = require('../index.js');

// test
test('read file', async () => {
  const filePath = './index.js';
  const res = await readFile(filePath);
  console.log(res);

  expect(res).toBeTruthy();
});
