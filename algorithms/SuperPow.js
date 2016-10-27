//取模运算的性质：（1）（a+b)%c=(a%c+b%c)%c，（2）（ab)%c=(a%c)(b%c)%c;(3) (a^b)%c=a%c^(b%c)
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    var l = b.length,
        result = 1;
    for (var i = 0; i < l; i++) {
        result = lowPow(result, 10) * lowPow(a, b[i]) % 1337;
    }
    return result;
};

var lowPow = function(val, n) {
    var temp;
    if (n === 0) {
        temp = 1;
    } else if (n === 1) {
        temp = val % 1337;
    } else {
        temp = lowPow(val, Math.floor(n / 2)) * lowPow(val, n - Math.floor(n / 2)) % 1337;
    }
    return temp;
};
