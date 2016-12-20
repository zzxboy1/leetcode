/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function(a,b){
        return a-b;
    });
    var len=nums.length,result=[];
    for(var i=0;i<len-3;i++){
        if(nums[i]===nums[i-1]){
            continue;
        }
        for(var j=i+1;j<len-2;j++){
            if(nums[j]===nums[j-1]&&j!==i+1){
                continue;
            }
            var low=j+1,high=len-1;
            while(low<high){
                var sum=nums[i]+nums[j]+nums[low]+nums[high];
                if(sum===target){
                    result.push([nums[i],nums[j],nums[low],nums[high]]);
                    do{
                     low++;
                    }while(nums[low]===nums[low-1]);
                }
                else if(sum<target){
                    low++;
                }
                else{
                    high--;
                }
            }
        }
    }
    return result;
};