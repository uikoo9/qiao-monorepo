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
 * method 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 */
exports.twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

/**
 * method 2
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 */
exports.twoSum2 = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    obj[n] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const s = target - n;
    const hasS = Object.prototype.hasOwnProperty.call(obj, s);
    if(!hasS){
      continue;
    }else{
      if(obj[s] == i) continue;
    }

    if(n === s){
      return [i, obj[s]];
    }

    return [obj[n], obj[s]];
  }
};