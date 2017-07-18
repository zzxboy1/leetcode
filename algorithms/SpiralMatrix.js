/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return matrix;
    }
    let m = matrix.length,
        n = matrix[0].length,
        result =[],
        res = [];
    if (m === 1) {
        return matrix[0];
    } else if (n === 1) {
        return matrix.map(val => {
            return val[0];
        })
    }
    let min = Math.min(m, n);
    let count = Math.ceil(min / 2)
    for (let i = 0; i < count; i++) {
        let top = matrix[i].slice(i, n - i),
            bottom = [],
            right = [],
            left = [];
        if(i !== m - i - 1) {
            bottom = matrix[m - i - 1].slice(i, n - i).reverse();
        }
        for (let j = i + 1; j < m - i - 1; j++) {
            right.push(matrix[j][n - i - 1]);
            if (i !== n - i - 1) {
                left.push(matrix[j][i]);
            }
        }
        result.push(...[...top, ...right, ...bottom, ...left.reverse()]);
    }
    return result;
};