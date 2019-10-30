/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
    intervals = intervals.sort((f, s) => {
        return f[0] - s[0];
    });
    for (let i = 1, len = intervals.length; i < len; i++) {
        if (intervals[i][1] < intervals[i - 1][1]) return false;
    }
    return true;
};