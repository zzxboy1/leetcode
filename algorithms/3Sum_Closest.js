/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b;
    });
    var result = null,
        len = nums.length;
    for (var i = 0; i < len; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        var low = i + 1,
            high = len - 1;
        while (low < high) {
            var sum = nums[low] + nums[high] + nums[i];
            if (sum === target) {
                return target;
            } else if (sum < target) {
                low++;
            } else {
                high--;
            }
            if (result === null || Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
        }
    }
    return result;
};
