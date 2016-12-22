/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i=0;
    while(nums[i]!==undefined){
        if(nums[i]===nums[i-1]){
            nums.splice(i,1);
        }
        else{
            i++;
        }
    }
    return nums.length;
};   