// q
const { mv } = require('../index.js');

// test
test('mv', async () => {
  const res = await mv('./__tests__/1/src', './__tests__/1/3/src');
  expect(res).toBeTruthy();
});
