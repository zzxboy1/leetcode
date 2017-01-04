/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var result = [],
        temp, l1 = num1.length,
        l2 = num2.length,
        resultStr = "";
    for (var i = l1 - 1; i >= 0; i--) {
        for (var j = l2 - 1; j >= 0; j--) {
            temp = num1[i] * num2[j];
            var tenTemp = Math.floor(temp / 10),
                oneTemp = Math.floor(temp % 10);
            result[l1 + l2 - i - j - 1] = result[l1 + l2 - i - j - 1] + oneTemp || oneTemp; //个位储存
            result[l1 + l2 - i - j] = result[l1 + l2 - i - j] + tenTemp || tenTemp; //十位储存
        }
    }
    for (i = 1; i < result.length; i++) {
        if (result[i] >= 10) { //进位
            result[i + 1] += Math.floor(result[i] / 10);
            result[i] = Math.floor(result[i] % 10);
        }
    }
    for (j = result.length - 1; j > 0; j--) { //将数组转为字符串
        resultStr += result[j];
    }
    var index = 0;
    while (resultStr[index] === "0") {
        index++;
    }
    return resultStr.substr(index) === "" ? "0" : resultStr.substr(index);
};
