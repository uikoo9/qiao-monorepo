// q
const { lsdir } = require('../index.js');

// test
test('ls dir', async () => {
  const dirpath = './';
  const res = await lsdir(dirpath);

  expect(res).toBeTruthy();
});
