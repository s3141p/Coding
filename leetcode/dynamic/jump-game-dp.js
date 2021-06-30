// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let reachable = 0;

    for (let i = 0; i < nums.length; i++) {
        if (reachable < i) {
            return false;
        }

        reachable = Math.max(reachable, i + nums[i]);
    }

    return true;
};


console.log(canJump([3, 2, 1, 0, 4]));
