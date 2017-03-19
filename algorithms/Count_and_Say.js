/**
 * @param {number} n
 * @return {string}
 */
/**
 * @param {number} n
 * @return {string}
 */
var updateSeq = function(str) {
    var s = "",
        temp = 1;
    for (var i = 0; i < str.length; i++) {
        if (str[i + 1] === str[i]) {
            temp += 1;
            continue;
        }
        s = s += (temp + str[i]);
        temp = 1;
    }
    return s;
};
var countAndSay = function(n) {
    var s = "1";
    for (var i = 1; i < n; i++) {
        s = updateSeq(s);
    }
    return s;
};
