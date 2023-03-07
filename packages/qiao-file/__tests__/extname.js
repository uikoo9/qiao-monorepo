// q
const { extname } = require('../index.js');

// test
test('get extname', () => {
  const filePath = 'd:/test1/test2/test.js';
  const res = extname(filePath);

  expect(res).toStrictEqual('.js');
});
