/**
 * 
给定一个整数数组 nums和一个整数目标值 target，请你在该数组中找出 和为目标值 target的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * twoSum
 *  正式的解法，将target-x记录到map中，方便快速查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const s = target - nums[i];

    if (map.has(s)) {
      return [map.get(s), i];
    } else {
      map.set(n, i);
    }
  }

  return [];
};

/**
 * method 1
 *  这个解法比较简单
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }

  return [];
};

/**
 * method 2
 *  这个类似map的解法，用obj实现了一下
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum2 = (nums, target) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const s = target - n;

    const hasS = Object.prototype.hasOwnProperty.call(obj, s);
    if (hasS) {
      return [obj[s], i];
    } else {
      obj[n] = i;
    }
  }

  return [];
};
