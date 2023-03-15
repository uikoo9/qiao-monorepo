// q
const { zip } = require('../index.js');

// test
async function test() {
  try {
    const src = '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-zip/index.js';
    const dest = '../demos/index.js.zip';
    const res = await zip(src, dest);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
test();
