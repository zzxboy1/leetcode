/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [],
        i = 1,
        temp = [],
        // 检测是否符合要求的工具函数
        check = function(arr, num) {
            for (let k = 0; k < num; k++) {
                if (arr[k] === arr[num] || Math.abs(arr[k] - arr[num]) === num - k) {
                    return false;
                }
            }
            return true;
        },
        queens = '.'.repeat(n).split('');
    temp[0] = 0;
    // 回溯法求解
    while (i > 0) {
        temp[i - 1] += 1;
        while (temp[i - 1] <= n){
            if(check(temp, i - 1)) {
                if (i === n) {
                   result.push(temp.slice(0, n));
                }
                temp[i] = 0;
                i += 2;
                break;
            } else {
                temp[i - 1] += 1;
            }
        } 
        i--;
    }
    // 得到的实际上是数字解，比如[2,4,1,3]这种，所以需要转换一下
    return result.map((val) => {
        return val.map((item) => {
            let q = [...queens];
            q.splice(item - 1, 1, 'Q');
            return q.join('');
        })
    })
};