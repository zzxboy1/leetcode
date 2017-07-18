/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var temp = nums[0],
        max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (temp < 0) {
            temp = nums[i];
            if (nums[i] > max) {
                max = nums[i];
            }
        } else {
            if (temp + nums[i] > max) {
                max = temp + nums[i];
            }
            temp = temp + nums[i];
        }
    }
    return max;
};