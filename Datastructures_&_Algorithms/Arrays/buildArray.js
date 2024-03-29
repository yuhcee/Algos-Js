/**
 * **1441. Build an Array With Stack Operations**
 *
 * You are given an integer array `target` and an integer `n`.
 *
 * You have an empty stack with the two following operations:
 *
 * - `"Push"`: pushes an integer to the top of the stack.
 * - `"Pop"`: removes the integer on the top of the stack.
 *
 * You also have a stream of the integers in the range `[1, n]`.
 *
 * Use the two stack operations to make the numbers in the stack (from the bottom to the top) equal
 * to `target`. You should follow the following rules:
 *
 * - If the stream of the integers is not empty, pick the next integer from the stream and push it
 * to the top of the stack.
 *
 * - If the stack is not empty, pop the integer at the top of the stack.
 *
 * - If, at any moment, the elements in the stack (from the bottom to the top) are equal to
 * `target`, do not read new integers from the stream and do not do more operations on the stack.
 *
 * Return *the stack operations needed to build `target` following the mentioned rules. If there
 * are multiple valid answers, return **any of them**.
 *
 * **Constraints:**
 *
 * - `1 <= target.length <= 100`
 * - `1 <= n <= 100`
 * - `1 <= target[i] <= n`
 * - `target` is strictly increasing.
 *
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const buildArray = function (target, n) {
    let result = []; // This will store the sequence of operations
    let targetIndex = 0; // This will keep track of the current index in the target array

    // Iterate through the numbers from 1 to n
    for (let i = 1; i <= n && targetIndex < target.length; i++) {
        result.push('Push'); // Push the current number onto the stack
        if (target[targetIndex] === i) {
            targetIndex++; // If the number matches the target, move to the next index in the target array
        } else {
            result.push('Pop'); // If not, pop it off the stack
        }
    }

    return result; // Return the sequence of operations
};

const target = [1, 3],
    n = 3;
Output: ['Push', 'Push', 'Pop', 'Push'];
/* Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Pop the integer on the top of the stack. s = [1].
Read 3 from the stream and push it to the stack. s = [1,3]. */
console.log(buildArray(target, n));

const target1 = [1, 2, 3],
    n1 = 3;
// Output: ['Push', 'Push', 'Push'];
/* Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Read 3 from the stream and push it to the stack. s = [1,2,3]. */
console.log(buildArray(target1, n1));

const target2 = [1, 2],
    n2 = 4;
// Output: ["Push","Push"]
/* Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Since the stack (from the bottom to the top) is equal to target, we stop the stack operations.
The answers that read integer 3 from the stream are not accepted. */
console.log(buildArray(target2, n2));
