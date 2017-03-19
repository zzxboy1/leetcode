/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var xString=""+x;
    if(StringReverse(xString)===xString){
        return true;
    }
    else{
        return false;
    }
};

function StringReverse(s){
    var result="";
    for (var i=s.length-1;i>=0;i--){
        result+=s[i];
    }
    return result;
}