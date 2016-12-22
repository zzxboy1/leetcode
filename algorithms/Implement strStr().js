/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   for(var i=0;;i++){
      for(var j=0;;j++){
          if(j===needle.length){
              return i;
          }
          if(i+j===haystack.length){
              return -1;
          }
          if(haystack.charAt(i+j)!==needle[j]){
              break;
          }
      }
   }
};