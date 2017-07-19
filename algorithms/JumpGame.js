/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) {
        return true;
    }
    let maxDis = 0;
    for (let i = 0; i < nums.length - 1 && i <= maxDis; i++) {
        if (nums[i] + i > maxDis) {
            maxDis = nums[i] + i;
        }
    }
    if (maxDis >= nums.length - 1) {
        return true;
    }
    return false
};