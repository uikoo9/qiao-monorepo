// ava
const test = require('ava');

// q
const { mkdir, rm, mv } = require('../../index.js');

// test
test.before(async (t) => {
  const dirpath = './__tests__/1/mv';
  const mkdirRes = await mkdir(dirpath);
  t.log('mkdir', mkdirRes);

  const rmpath = './__tests__/1/xx/mv';
  const rmRes = await rm(rmpath);
  t.log('rm', rmRes);
});
test('mv', async (t) => {
  const res = await mv('./__tests__/1/mv', './__tests__/1/xx/mv');
  t.true(res);
});
