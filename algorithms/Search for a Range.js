/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var search = function(left, right, result, nums, target) {
    if (left > right) {
        return;
    }
    var pos = Math.floor((right + left) / 2);
    if (nums[pos] === target) {
        if (result[0] === -1 && result[1] === -1) {
            result[0] = result[1] = pos;
        } else {
            result[0] = pos < result[0] ? pos : result[0];
            result[1] = pos > result[1] ? pos : result[1];
        }
        search(left, pos - 1, result, nums, target);
        search(pos + 1, right, result, nums, target);
    } else if (nums[pos] > target) {
        search(left, pos - 1, result, nums, target);
    } else {
        search(pos + 1, right, result, nums, target);
    }
};
var searchRange = function(nums, target) {
    var result = [-1, -1];
    search(0, nums.length - 1, result, nums, target);
    return result;
};
