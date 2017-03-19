/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
   var convert = function(s, numRows) {
        if (s.length <= numRows) {
            return s;
        }
        if(numRows<=1){
            return s;
        }
        var count = 0,
            temp = [],
            result = "";
        while ((count % (numRows-1) === 0 && s.length > numRows) || (count % (numRows-1) !== 0 && s.length > 1)) {
            if (count % (numRows-1) === 0) {
                temp[count] = s.substr(0, numRows);
                s = s.substr(numRows);
                ++count;
            } else{
                temp[count] = s.substr(0, 1);
                s = s.substr(1);
                ++count;
            }
        }
        temp[count] = s;
        var tlength = temp.length;
        for (var i = 0; i < numRows; i++) {
            var flag = 0;
            for (var j = 0; j < tlength; j++) {
                if (flag % (numRows-1) === 0) {
                    if(temp[j][i]){
                    result += temp[j][i];
                    flag++;
                    }
                } else{
                    if (i == ((numRows-1)-flag % (numRows-1))) {
                        result += temp[j];
                    }
                    flag++;
                } 
            }
        }
        return result;

    };