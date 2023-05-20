/**
 * **2140. Solving Questions With Brainpower**
 *
 * You are given a **0-indexed** 2D integer array `questions` where `questions[i] =
 * [pointsi, brainpoweri]`.
 *
 * The array describes the questions of an exam, where you have to process the questions
 * in order (i.e., starting from question `0`) and make a decision whether to **solve**
 * or **skip** each question. Solving question `i` will earn you `pointsi` points but you
 * will be **unable** to solve each of the next `brainpoweri` questions. If you skip
 * question `i`, you get to make the decision on the next question.
 *
 * - For example, given `questions = [[3, 2], [4, 3], [4, 4], [2, 5]]:`
 *  - If question `0` is solved, you will earn `3` points but you will be unable to solve
 * questions `1` and `2`.
 *  - If instead, question `0` is skipped and question `1` is solved, you will earn `4`
 * points but you will be unable to solve questions `2` and `3`.
 *
 * Return *the **maximum** points you can earn for the exam*.
 *
 * **Constraints:**
 *
 * - `1 <= questions.length <= 105`
 * - `questions[i].length == 2`
 * - `1 <= pointsi, brainpoweri <= 105`
 *
 * @param {number[][]} questions - 2D integer array describing the questions.
 * @return {number} - Maximum points that can be earned.
 */
const mostPoints = function (questions) {
    const n = questions.length;
    const dp = new Array(n).fill(BigInt(0));

    // Initialize the last question's points
    dp[n - 1] = BigInt(questions[n - 1][0]);

    // Dynamic programming from the second-to-last question to the first question
    for (let i = n - 2; i >= 0; --i) {
        dp[i] = BigInt(questions[i][0]); // Points earned by solving the current question
        const skip = questions[i][1]; // Number of questions to skip

        // Check if it is possible to solve the current question and earn additional points from skipped questions
        if (i + skip + 1 < n) {
            dp[i] += dp[i + skip + 1]; // Add the points earned from skipped questions
        }

        // Choose the maximum points between solving the current question and skipping it
        dp[i] = BigInt(Math.max(Number(dp[i]), Number(dp[i + 1])));
    }

    return Number(dp[0]); // Convert the result from BigInt to Number
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
Total points earned: 3 + 2 = 5. There is no other way to earn 5 or more points. */
console.log(mostPoints(questions));
