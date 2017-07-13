/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var l = matrix.length,
        temp = [];
    for (var i = 0; i < Math.floor(l / 2); i++){
        for(var j = i; j < l - i - 1; j++) {
            temp = [matrix[i][j], matrix[j][l - i - 1], matrix[l - i - 1][l - j - 1], matrix[l - j - 1][i]];
            matrix[i][j] = temp[3];
            matrix[j][l - i - 1] = temp[0];
            matrix[l - i - 1][l - j - 1] = temp[1];
            matrix[l - j -1][i] = temp[2];
        }
    }
};