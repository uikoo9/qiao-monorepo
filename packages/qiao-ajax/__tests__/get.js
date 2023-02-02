const { get } = require('../index.js');

/**
 * @jest-environment jsdom
 */
test('get on browser', async () => {
  const res = await get('https://icanhazip.com/');

  expect(res).toBeDefined();
});

/**
 * @jest-environment node
 */
test('get on nodejs', async () => {
  const res = await get('https://icanhazip.com/');

  expect(res).toBeDefined();
});
