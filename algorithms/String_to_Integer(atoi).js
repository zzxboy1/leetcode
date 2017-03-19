/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var result = parseInt(str);
    if(str===""|| isNaN(result)){
        return 0;
    }
    else if(result> Math.pow(2,31)-1)
    {
        return Math.pow(2,31)-1;
    }
    else if(result< -Math.pow(2,31))
    {
        return -Math.pow(2,31);
    }
    else{
        return result;
    }
};