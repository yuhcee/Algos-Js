/**
 * **57. Insert Interval**
 * You are given an array of non-overlapping intervals `intervals` where
 * `intervals[i] = [starti, endi]` represent the start and the end of the
 * `ith` interval and `intervals` is sorted in ascending order by `starti`.
 * You are also given an interval `newInterval = [start, end]` that
 * represents the start and end of another interval.
 *
 * Insert `newInterval` into `intervals` such that `intervals` is still
 * sorted in ascending order by `starti` and `intervals` still does not have
 * any overlapping intervals (merge overlapping intervals if necessary).
 *
 * Return *`intervals` after the insertion.*
 *
 * **Note** that you don't need to modify `intervals` in-place. You can make
 * a new array and return it.
 *
 * **Constraints:**
 *
 * - `0 <= intervals.length <= 104`
 * - `intervals[i].length == 2`
 * - `0 <= starti <= endi <= 105`
 * - `intervals` is sorted by `starti` in **ascending** order.
 * - `newInterval.length == 2`
 * - `0 <= start <= end <= 105`
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
    let result = [];
    let inserted = false;

    for (let currInterval of intervals) {
        if (currInterval[1] < newInterval[0]) {
            result.push(currInterval);
        } else if (currInterval[0] > newInterval[1]) {
            if (!inserted) {
                result.push(newInterval);
                inserted = true;
            }
            result.push(currInterval);
        } else {
            newInterval[0] = Math.min(newInterval[0], currInterval[0]);
            newInterval[1] = Math.max(newInterval[1], currInterval[1]);
        }
    }

    if (!inserted) {
        result.push(newInterval);
    }

    return result;
};
