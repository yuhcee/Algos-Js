/**
 * **630. Course Schedule III**
 *
 * There are `n` different online courses numbered from `1` to `n`. You are given an array courses where `courses[i] =
 * [durationi, lastDayi]` indicate that the `ith` course should be taken **continuously** for durationi days and must be
 * finished before or on `lastDayi`.
 *
 * You will start on the `1st` day and you cannot take two or more courses simultaneously.
 *
 * Return *the maximum number of courses that you can take*.
 *
 *
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = (courses) => {
    // sort courses by last day
    courses.sort((a, b) => a[1] - b[1]);
    let time = 0,
        count = 0;

    for (let i = 0; i < courses.length; i++) {
        if (time + courses[i][0] <= courses[i][1]) {
            time += courses[i][0];
            courses[count++] = courses[i];
        } else {
            let maxIndex = i;
            for (let j = 0; j < count; j++) {
                if (courses[j][0] > courses[maxIndex][0]) maxIndex = j;
            }

            if (courses[maxIndex][0] > courses[i][0]) {
                time += courses[i][0] - courses[maxIndex][0];
                courses[maxIndex] = courses[i];
            }
        }
    }
    return count;
};
