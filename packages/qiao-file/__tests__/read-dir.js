// q
const { readDir } = require('../index.js');

// test
test('read dir', async () => {
  const dirpath = '/Users';
  const res = await readDir(dirpath);
  expect(res).toBeTruthy();
});
