/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var newArray=[];
    var l=nums.length
    for(var i=0;i<l;i++){
        for(var j=i+1;j<l;j++){
            if(nums[i]+nums[j]===target){
                newArray.push(i,j);
                return newArray;
            }
        } 
    }
};