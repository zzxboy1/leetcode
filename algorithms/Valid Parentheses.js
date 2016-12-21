/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1 || /[\}\]\)]/.test(s[0])) {
        return false;
    }
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (/[\{\[\(]/.test(s[i])) {
            stack.push(s[i]);
        } else {
            var len = stack.length;
            if (Math.abs(stack[len - 1].charCodeAt(0) - s[i].charCodeAt(0)) <= 2) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};
