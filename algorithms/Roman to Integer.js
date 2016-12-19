/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var huns = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    result=0,hNum=0,tNum=0,oNum=0,count=0,Num=[0,0,0],
    sSub=s,
    Arr=[ones,tens,huns];
    while(sSub[0]==="M"){
        sSub=sSub.substring(1);
    }
    var thNum=s.length-sSub.length;
    for(var j=0;j<3;j++){
        for(var i=0;i<9;i++){
            if(sSub.indexOf(Arr[j][i])!==-1){
                Num[j]=i+1;
                if(Num[j]==4){
                    break;
                }
            }
        }
        sSub=sSub.replace(Arr[j][Num[j]-1],"");
    }
    result=thNum*1000+Num[2]*100+Num[1]*10+Num[0];
    return result;
};