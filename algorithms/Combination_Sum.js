/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [],
        temp = [];
    var find = function(target, temp, index) {
        for (var i = index; i >= 0; i--) {
            if (candidates[i] > target) {
                continue;
            } else if (candidates[i] === target) {
                result.push(temp.concat([candidates[i]]));
            } else {
                find(target - candidates[i], temp.concat([candidates[i]]), i);
            }
        }
    };
    find(target, temp, candidates.length - 1);
    return result;
};
