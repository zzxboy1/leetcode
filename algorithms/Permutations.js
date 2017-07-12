/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [],
        len = nums.length;
    var addNum = function(used, arr) {
        var temp = arr.slice(0);
        for (var i = 0; i < len; i++) {
            if (used[i] === true) {
                continue;
            }
            temp.push(nums[i]);
            if (temp.length === len) {
                result.push(temp);
                return
            }
            used[i] = true;
            addNum(used, temp);
            used[i] = false;
            temp.pop();
        }
    }
    addNum([], []);
    return result;
};