// q
const { mv } = require('../index.js');

// test
test('mv', async () => {
  const res = await mv('./2', './__tests__/1/3/src');
  expect(res).toBeFalsy();
});
