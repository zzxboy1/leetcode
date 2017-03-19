/**
 * @param {string} digits
 * @return {string[]}
 */
var Arr=["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
var add=function(result,curr,length,index,digits){
  if(index===length){
      if(curr!==""){
        result.push(curr);
      }
      return;
  }
  var len=Arr[digits[index]].length;
  for(var i=0;i<len;i++){
      add(result,curr+Arr[digits[index]][i],length,index+1,digits);
  }
};
var letterCombinations = function(digits) {
    var result=[];
    add(result,"",digits.length,0,digits);
    return result;
};