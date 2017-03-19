/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var a = new Array(9),
        b = new Array(9),
        c = new Array(9);
    for (var k = 0; k < 9; k++) {
        a[k] = new Array(9);
        b[k] = new Array(9);
        c[k] = new Array(9);
    }

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var temp = board[i][j];
            if (temp === ".") {
                continue;
            }
            if (a[i][temp - 1] || b[temp - 1][j] || c[Math.floor(i / 3) * 3 + Math.floor(j / 3)][temp - 1]) {
                return false;
            }
            a[i][temp - 1] = b[temp - 1][j] = c[Math.floor(i / 3) * 3 + Math.floor(j / 3)][temp - 1] = true;
        }
    }
    return true;
};
