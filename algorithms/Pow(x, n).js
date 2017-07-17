/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var flag = false,
        p = x,
        res = 1
    if (n < 0) {
        flag = true;
    }
    for (var i = Math.abs(n); i > 0  ; i = Math.floor(i/2)) {
        if (i % 2 !== 0) {
            res = res * p;
        }
        p = p * p;
    }
    result = flag ? 1 / res : res;
    return result
};