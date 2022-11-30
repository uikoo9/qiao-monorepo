// db
const db = require('../index.js')();

// config
test('config', function () {
  // clear and all
  db.clear();
  const all = db.all();
  expect(all).toStrictEqual({});

  // set and get
  db.config('test', 'hello');
  const value = db.config('test');
  expect(value).toStrictEqual('hello');

  // del
  db.config('test', null);
  const delValue = db.config('test');
  expect(delValue).toBeUndefined();
});
