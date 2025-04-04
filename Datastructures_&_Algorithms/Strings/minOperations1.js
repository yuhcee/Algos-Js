/**
 * **1769. Minimum Number of Operations to Move All Balls to Each Box**
 *
 * You have `n` boxes. You are given a binary string `boxes` of length `n`,
 * where `boxes[i]` is `'0'` if the `ith` box is **empty**, and `'1'` if it
 * contains **one** ball.
 *
 * In one operation, you can move **one** ball from a box to an adjacent
 * box. Box `i` is adjacent to box `j` if `abs(i - j) == 1`. Note that
 * after doing so, there may be more than one ball in some boxes.
 *
 * Return an array `answer` of size `n`, where `answer[i]` is the
 * **minimum** number of operations needed to move all the balls to the
 * `ith` box.
 *
 * Each `answer[i]` is calculated considering the **initial** state of the
 * boxes.
 *
 * **Constraints:**
 *
 * - `n == boxes.length`
 * - `1 <= n <= 2000`
 * - `boxes[i]` is either `'0'` or `'1'`.
 *
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function (boxes) {
    const n = boxes.length;
    const answer = Array(n).fill(0);

    // Left-to-right pass
    let operations = 0; // Cumulative operations from the left
    let balls = 0;      // Number of balls seen so far on the left
    for (let i = 0; i < n; i++) {
        answer[i] += operations;
        balls += boxes[i] === '1' ? 1 : 0;
        operations += balls; // Add balls to operations for the next index
    }

    // Right-to-left pass
    operations = 0; // Reset cumulative operations for the right
    balls = 0;      // Reset number of balls seen so far on the right
    for (let i = n - 1; i >= 0; i--) {
        answer[i] += operations;
        balls += boxes[i] === '1' ? 1 : 0;
        operations += balls; // Add balls to operations for the next index
    }

    return answer;
};

const boxes = '110';
// Output: [1,1,3]
/* Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation. */
console.log(minOperations(boxes));

const boxes1 = '001011';
// Output: [11,8,5,4,3,4]
/* Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the third box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations.
4) Fourth box: you will have to move one ball from the third box to the fourth box in one operation.
5) Fifth box: you will have to move one ball from the third box to the fifth box in one operation.
6) Sixth box: you will have to move one ball from the third box to the sixth box in two operations. */
console.log(minOperations(boxes1));
