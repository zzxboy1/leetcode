/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var temp = [];
    for (var i = 0; i < nums.length; i++) {
        if (temp[target - nums[i]] !== undefined) {
            return [temp[target - nums[i]], i];
        }
        if (temp[nums[i]] === undefined) {
            temp[nums[i]] = i;
        }
    }
};
