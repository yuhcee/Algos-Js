/**
 * **1700. Number of Students Unable to Eat Lunch**
 *
 * The school cafeteria offers circular and square sandwiches at lunch break,
 * referred to by numbers `0` and `1` respectively. All students stand in a
 * queue. Each student either prefers square or circular sandwiches.
 *
 * The number of sandwiches in the cafeteria is equal to the number of students.
 * The sandwiches are placed in a **stack**. At each step:
 *
 * - If the student at the front of the queue **prefers** the sandwich on the
 * top of the stack, they will **take it** and leave the queue.
 *
 * - Otherwise, they will **leave it** and go to the queue's end.
 *
 * This continues until none of the queue students want to take the top sandwich
 * and are thus unable to eat.
 *
 * You are given two integer arrays `students` and `sandwiches` where `sandwiches
 * [i]` is the type of the `i​​​​​​th` sandwich in the stack (`i = 0` is the top
 * of the stack) and `students[j]` is the preference of the `j​​​​​​th` student
 * in the initial queue (`j = 0` is the front of the queue).
 *
 * Return *the number of students that are unable to eat.*
 *
 * **Constraints:**
 *
 * - 1 <= students.length, sandwiches.length <= 100`
 * - `students.length == sandwiches.length`
 * - `sandwiches[i]` is `0` or `1`.
 * - `students[i]` is `0` or `1`.
 *
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = function (students, sandwiches) {
    const count = [0, 0]; // Count of students who prefer circular and square sandwiches
    const n = students.length;

    for (const student of students) {
        count[student]++;
    }

    for (const sandwich of sandwiches) {
        if (count[sandwich] === 0) {
            break; // No more students can take this type of sandwich
        }

        count[sandwich]--;
    }

    return count[0] + count[1];
};
