/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var result = [],
        obj = {},
        pipe = function(str) {
            return str.split('').sort().join('');
        }
    for (var i = 0; i < strs.length; i++ ) {
        if (obj[pipe(strs[i])] === undefined) {
            obj[pipe(strs[i])] = result.length;
            result.push([].concat(strs[i]));
        } else {
           result[obj[pipe(strs[i])]].push(strs[i]);
        }
    }
    return result;
};