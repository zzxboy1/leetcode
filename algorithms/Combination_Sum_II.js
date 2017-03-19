/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort(function(a,b){
        return a-b;
    });
    var result = [],
    tempSave = [];
    var find = function(target, temp, index,temp2) {
        for (var i = index; i <candidates.length; i++) {
            if (candidates[i] > target) {
                break;
            } else if (candidates[i] === target) {
                if(tempSave[temp2+candidates[i]]){
                    break;
                }
                result.push(temp.concat([candidates[i]]));
                tempSave[temp2+candidates[i]]=true;
            } else {
                find(target - candidates[i], temp.concat([candidates[i]]), i+1,temp2+candidates[i]);
            }
        }
    };
    find(target, [], 0,"");
    return result;
};