// q
const { isDir } = require('../index.js');

// test
test('is dir', async () => {
  const fpath = 'z:/workspaces/qiao.plugin.coder/lib/qiao.plugin.coder.js';
  const res1 = await isDir(fpath);
  expect(res1).toBeFalsy();

  const dirpath = '/Users';
  const res2 = await isDir(dirpath);
  expect(res2).toBeTruthy();
});
