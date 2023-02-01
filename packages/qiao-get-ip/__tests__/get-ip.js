const { getIp } = require('../index.js');

/**
 * @jest-environment jsdom
 */
test('get ip on browser', async () => {
  const ip = await getIp();
  expect(ip).toBeDefined();
});

/**
 * @jest-environment node
 */
test('get ip on nodejs', async () => {
  const ip = await getIp();
  expect(ip).toBeDefined();
});
