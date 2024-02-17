// ava
const test = require('ava');

// q
const { isOnline, offlineToOnline } = require('./index.js');

// test
test('is online', async (t) => {
  const res = await isOnline();

  t.is(res, 'online');
});
test('is online / strict mode', async (t) => {
  const res = await isOnline(true);

  t.is(res, 'online');
});
test.skip('offline to online', (t) => {
  const timeout = 20 * 1000;
  t.timeout(timeout);
  t.log(`offline to online in ${timeout}`);

  return new Promise((resolve) => {
    offlineToOnline(() => {
      resolve();
    }, 3 * 1000);
  });
});
