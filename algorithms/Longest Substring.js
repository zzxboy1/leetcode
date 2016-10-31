/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var a="",
    al=0,
    max="",
    sl=s.length;
    for(var i=0;i<sl;i++){
        var sSub=s.substr(i,1);
        var index=a.indexOf(sSub);
        if(index===-1){
            a+=sSub;
        }
        else{
            a=a.substring(index+1)+sSub;
        }
        
        if(max.length<a.length){
            max=a;
        }
    }
    return max.length;
};