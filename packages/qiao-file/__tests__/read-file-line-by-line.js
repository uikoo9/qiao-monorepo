// q
const { readFileLineByLine } = require('../index.js');

// test
async function test() {
  console.log('== test read-file-line-by-line.js / begin');
  console.log();
  const filePath = './__tests__/rm.js';
  readFileLineByLine(
    filePath,
    (line) => {
      console.log(line);
    },
    () => {
      console.log();
      console.log('close');
      console.log('== test read-file-line-by-line.js / end');
      console.log();
    },
  );
}
test();
