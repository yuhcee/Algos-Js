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

const intervals = [
        [1, 3],
        [6, 9],
    ],
    newInterval = [2, 5];
// Output: [[1,5],[6,9]]
console.log(insert(intervals, newInterval));

const intervals1 = [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
    ],
    newInterval1 = [4, 8];
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
console.log(insert(intervals1, newInterval1));
