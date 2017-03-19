/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length <= 1) {
        return;
    }
    var len = nums.length,
        i = len - 1;
    while (i > 0) {
        if (nums[i - 1] < nums[i]) {
            break;
        }
        i--;
    }
    var j = len - 1,
        temp;
    if (i > 0) {
        while (j > i - 1) {
            if (nums[j] > nums[i - 1]) {
                temp = nums[i - 1];
                nums[i - 1] = nums[j];
                nums[j] = temp;
                break;
            }
            j--;
        }
    }
    j = 0;
    while (j + i < Math.ceil((i + len - 1) / 2)) {
        temp = nums[len - 1 - j];
        nums[len - 1 - j] = nums[j + i];
        nums[j + i] = temp;
        j++;
    }
    return;
};
