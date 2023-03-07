// q
const { isExists } = require('../index.js');

// test
test('path is exists', async () => {
  const fpath = 'z:/workspaces/qiao.plugin.coder/lib/qiao.plugin.coder.js';
  const res = await isExists(fpath);

  expect(res).toBeFalsy();
});
