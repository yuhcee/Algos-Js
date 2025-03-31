/**
 * **2140. Solving Questions With Brainpower**
 *
 * You are given a **0-indexed** 2D integer array `questions` where `questions[i] = [pointsi, brainpoweri]`.
 *
 * The array describes the questions of an exam, where you have to process the questions **in order** (i.e., starting
 * from question `0`) and make a decision whether to **solve** or **skip** each question. Solving question `i` will
 * **earn** you `pointsi` points but you will be **unable** to solve each of the next `brainpoweri` questions. If you
 * skip question `i`, you get to make the decision on the next question.
 *
 * - For example, given `questions = [[3, 2], [4, 3], [4, 4], [2, 5]]`:
 *  - If question `0` is solved, you will earn `3` points but you will be unable to solve questions `1` and `2`.
 *  - If instead, question `0` is skipped and question `1` is solved, you will earn `4` points but you will be unable to
 * solve questions `2` and `3`.
 *
 * Return *the **maximum** points you can earn for the exam*.
 *
 * **Constraints:**
 *
 * - `1 <= questions.length <= 105`
 * - `questions[i].length == 2`
 * - `1 <= pointsi, brainpoweri <= 105`
 *
 * @param {number[][]} questions
 * @return {number}
 */
const mostPoints = function (questions) {
    const n = questions.length;
    // dp[i] represents the maximum points we can earn from index i to the end
    const dp = new Array(n + 1).fill(0); // Extra slot for beyond the last question

    // Work backwards from the last question
    for (let i = n - 1; i >= 0; i--) {
        const points = questions[i][0]; // Points for solving current question
        const brainpower = questions[i][1]; // Questions to skip if solved

        // Option 1: Skip the current question
        const skip = dp[i + 1];

        // Option 2: Solve the current question
        // If we solve, we earn points[i] and skip brainpower[i] questions
        // Next solvable question is at i + brainpower + 1
        const nextIndex = Math.min(n, i + brainpower + 1);
        const solve = points + dp[nextIndex];

        // Take the maximum of solving or skipping
        dp[i] = Math.max(solve, skip);
    }

    // Return the maximum points starting from question 0
    return dp[0];
};

const questions = [
    [3, 2],
    [4, 3],
    [4, 4],
    [2, 5],
];
// Output: 5
/* Explanation: The maximum points can be earned by solving questions 0 and 3.
- Solve question 0: Earn 3 points, will be unable to solve the next 2 questions
- Unable to solve questions 1 and 2
- Solve question 3: Earn 2 points
Total points earned: 3 + 2 = 5. There is no other way to earn 5 or more points.
 */
console.log(mostPoints(questions)); // 5

const questions1 = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
];
// Output: 7
/* Explanation: The maximum points can be earned by solving questions 1 and 4.
- Skip question 0
- Solve question 1: Earn 2 points, will be unable to solve the next 2 questions
- Unable to solve questions 2 and 3
- Solve question 4: Earn 5 points
Total points earned: 2 + 5 = 7. There is no other way to earn 7 or more points. */
console.log(mostPoints(questions1)); // 7

const questions2 = [
    [1, 2],
    [2, 4],
    [3, 2],
    [4, 1],
];
// Output: 5
console.log(mostPoints(questions2)); // 5
