// ava
const test = require('ava');

// ls
const { twoSum1, twoSum2, twoSum3 } = require('../index.js');

// 01 two sum
test('01 two sum 1', (t) => {
  const nums = [3, 3];
  const target = 6;
  const s = twoSum1(nums, target);

  t.true(s && s.length === 2 && s[0] === 0 && s[1] === 1);
});
test('01 two sum 2', (t) => {
  const nums = [3, 3];
  const target = 6;
  const s = twoSum2(nums, target);

  t.true(s && s.length === 2 && s[0] === 0 && s[1] === 1);

  const nums1 = [3, 2, 4];
  const target1 = 6;
  const s1 = twoSum2(nums1, target1);

  t.true(s1 && s1.length === 2 && s1[0] === 1 && s1[1] === 2);
});
test('01 two sum 3', (t) => {
  const nums = [3, 3];
  const target = 6;
  const s = twoSum3(nums, target);

  t.true(s && s.length === 2 && s[0] === 0 && s[1] === 1);

  const nums1 = [3, 2, 4];
  const target1 = 6;
  const s1 = twoSum3(nums1, target1);

  t.true(s1 && s1.length === 2 && s1[0] === 1 && s1[1] === 2);
});
