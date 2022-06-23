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

const courses = [
    [100, 200],
    [200, 1300],
    [1000, 1250],
    [2000, 3200],
];
// Output: 3
/* Explanation: 
There are totally 4 courses, but you can take 3 courses at most:
First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day. 
Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. 
The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date. */
console.log(scheduleCourse(courses));
