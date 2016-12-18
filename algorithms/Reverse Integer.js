/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var xString= ""+x,
    result="";
    if (xString[0]==="-"){
        xString=xString.substr(1);
        result="-"+StringReverse(xString)-0;
    }
    else{
        result=StringReverse(xString)-0;
    }
    if(result<=Math.pow(2,31)&&result>=-Math.pow(2,31)){
    return result;
        
    }
    else{
        return 0;
    }
};

function StringReverse(s){
    var result="";
    for (var i=s.length-1;i>=0;i--){
        result+=s[i];
    }
    return result;
}