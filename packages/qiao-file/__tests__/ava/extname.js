// ava
const test = require('ava');

// q
const { extname } = require('../../index.js');

// test
test('extname is .js', (t) => {
  const filePath = './extname.js';
  const res = extname(filePath);
  t.is(res, '.js');
});
