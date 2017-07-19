/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) {
        return intervals;
    }
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let obj = [];  // [{index: x, pos: 'right' or 'left'},{index: x, pos: 'right' or 'left'}]
        for (let j = 0; j < result.length; j++) {
            if (j === result.length -1 && intervals[i].start > result[j].end) {
                result.push(intervals[i]);
                break;
            }
            if (j === 0 && intervals[i].end < result[j].start) {
                result.unshift(intervals[i]);
                break;
            }
            if (intervals[i].start <= result[j].end && intervals[i].start >= result[j].start) {
                obj[0] = { index: j, pos: 'mid'};
            } else if (intervals[i].start <= result[j].start && ( j ===0 || intervals[i].start > result[j - 1].end)) {
                obj[0] = { index: j, pos: 'left'};
            }
            if (intervals[i].end >= result[j].end && (j === result.length -1 || intervals[i].end < result[j + 1].start)) {
                obj[1] = { index: j, pos: 'right'};
            } else if (intervals[i].end >= result[j].start && intervals[i].end <= result[j].end) {
                obj[1] = { index: j, pos: 'mid'};
            }
            if (obj[1] && obj[0]) {
                break;
            }
        }
        if(!obj[1] || !obj[0] ) {
            continue;
        }
        let start = obj[0].index,
            end = obj[1].index;
        if (obj[0].pos === 'mid') {
            if (obj[1].pos === 'mid') {
                if (obj[0].index === obj[1].index) {
                    continue;
                } else {
                    const newItv = new Interval(result[start].start, result[end].end);
                    result.splice(start, end - start + 1, newItv);
                }
            } else if (obj[1].pos === 'right') {
                const newItv = new Interval(result[start].start, intervals[i].end);
                result.splice(start, end - start + 1, newItv);
            }
        } else if (obj[0].pos === 'left') {
            if (obj[1].pos === 'mid') {
                const newItv = new Interval(intervals[i].start, result[end].end);
                result.splice(start, end - start + 1, newItv);
            } else if(obj[1].pos === 'right') {
                const newItv = new Interval(intervals[i].start, intervals[i].end);
                if (obj[0].index > obj[1].index) {
                    result.splice(start, 0, newItv);
                } else {
                    result.splice(start, end - start + 1, newItv);
                }
            }
        }
    }
    return result;
};