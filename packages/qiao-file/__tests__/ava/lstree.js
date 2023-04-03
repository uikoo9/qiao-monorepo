// ava
const test = require('ava');

// q
const { lstree } = require('../../index.js');

// test
test('ls tree', async (t) => {
  const dirpath = '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-file';
  const ignores = ['node_modules', 'is-'];
  const res = await lstree(dirpath, ignores);

  t.truthy(res);
});
