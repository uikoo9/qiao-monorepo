// q
const { mkdir } = require('../index.js');

// test
test('mk dir', async () => {
  const dirpath = './__tests__/1/2/3/4';
  const res = await mkdir(dirpath);

  expect(res).toBeTruthy();
});
