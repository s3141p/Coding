// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      return true;
    }

    hash[nums[i]] = true;
  }
  return false;
};
