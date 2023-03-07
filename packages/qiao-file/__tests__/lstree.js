// q
const { lstree } = require('../index.js');

// test
test('ls dir', async () => {
  const dirpath = '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-file';
  const ignores = ['node_modules', 'is-'];
  const res = await lstree(dirpath, ignores);

  expect(res).toBeTruthy();
});
