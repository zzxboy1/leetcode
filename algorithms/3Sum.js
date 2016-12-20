/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    })
    var target,result=[],len=nums.length;
    for(var i=0;i<len;i++){
        if (target===nums[i]){
            continue;
        }
        else{
            target=nums[i];
        }
        var low=i+1,high=len-1;
        while(low<high){
            if(nums[low]+nums[high]===-target){
                result.push([target,nums[low],nums[high]]);
                do{
                   low++; 
                }while(nums[low]===nums[low-1]);
            }
            else if(nums[low]+nums[high]<-target){
                low++;
            }
            else{
                high--;
            }
        }
    }
    return result;
};