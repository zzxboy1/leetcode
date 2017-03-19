/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
        var c, d, e = 0;
            while ((a & b) !== 0) {
                d = a ^ b;
                e = (a & b) << 1;
                a = d;
                b = e;
                console.log(a,b);
            }
            c = a | b;
        return c;
    }