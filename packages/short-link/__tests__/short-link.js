const { shortLink } = require('../index.js');

/**
 * @jest-environment jsdom
 */
test('get short link on browser', async () => {
  const res = await shortLink('https://insistime.com/');

  expect(res).toBeDefined();
  expect(res.res).toBeTruthy();
});

/**
 * @jest-environment node
 */
test('get short link on nodejs', async () => {
  const res = await shortLink('https://insistime.com/');

  expect(res).toBeDefined();
  expect(res.res).toBeTruthy();
});
