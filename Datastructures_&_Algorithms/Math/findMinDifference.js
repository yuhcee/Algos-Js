/**
 * **539. Minimum Time Difference**
 *
 * Given a list of 24-hour clock time points in **"HH:MM"** format, return
 * *the minimum **minutes** difference between any two time-points in the
 * list*.
 *
 * **Constraints:**
 *
 * - `2 <= timePoints.length <= 2 * 104`
 * - `timePoints[i]` is in the format **"HH:MM"**.
 *
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = function (timePoints) {
    // Step 1: Convert the time points to minutes since 00:00
    const minutes = timePoints.map((time) => {
        const [hh, mm] = time.split(':').map(Number);
        return hh * 60 + mm;
    });

    // Step 2: Sort the minutes
    minutes.sort((a, b) => a - b);

    // Step 3: Initialize minDifference with a large value
    let minDifference = Infinity;

    // Step 4: Compare differences between consecutive times
    for (let i = 1; i < minutes.length; i++) {
        minDifference = Math.min(minDifference, minutes[i] - minutes[i - 1]);
    }

    // Step 5: Handle circular difference (from last time back to first time, around midnight)
    const circularDifference = 1440 + minutes[0] - minutes[minutes.length - 1]; // 1440 = total minutes in a day
    minDifference = Math.min(minDifference, circularDifference);

    return minDifference;
};
