// q
const { rm } = require('../index.js');

// test
test('rm', async () => {
  const res = await rm('./__tests__ copy');
  expect(res).toBeTruthy();
});
