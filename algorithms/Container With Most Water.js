/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max=0,
        temp=0,
        h=0,
        l=0,
        start=0,
        end=height.length-1;
    for(var i=0;i<height.length-1;i++){
           l=end-start;
           if(height[start]>height[end]){
               h=height[end];
               end--;
           }
           else{
               h=height[start];
               start++;
           }
           if (max<h*l){
               max=h*l;
           }
        }
    return max;
};