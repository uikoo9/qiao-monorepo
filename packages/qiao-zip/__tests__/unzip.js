// q
const { unzip } = require('../index.js');

// test
async function test() {
  try {
    const zipFile = '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-zip/demos/test.zip';
    const destFolder = '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-zip/demos/unzip-folder';
    const res = await unzip(zipFile, destFolder);
    console.log(`unzip: ${!!res}`);
  } catch (e) {
    console.log(e);
  }
}
test();
