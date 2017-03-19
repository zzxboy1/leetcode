/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var huns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    thNum=Math.floor(num/1000),
    hNum=Math.floor(num%1000/100),
    tNum=Math.floor(num%100/10),
    oNum=num%10,
    result="";
    while(thNum>0){
        result+="M";
        thNum--;
    }
    result=result+huns[hNum]+tens[tNum]+ones[oNum];
    return result;
};