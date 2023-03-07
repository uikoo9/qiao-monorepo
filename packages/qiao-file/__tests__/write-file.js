// q
const { writeFile } = require('../index.js');

// test
test('write file', async () => {
  const filePath = './__tests__/1/2/1.js';
  const res = await writeFile(filePath, 'sth');

  expect(res).toBeTruthy();
});
