/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    var init = 1;
    while (Math.abs(init * init - x) > 0.1) {
        init = (x + init * init) / (2 * init);
    }
    return Math.floor(init);
};
