/**
 * **1578. Minimum Time to Make Rope Colorful**
 *
 * Alice has `n` balloons arranged on a rope. You are given a **0-indexed** string `colors` where `colors[i]` is the
 * color of the `ith` balloon.
 *
 * Alice wants the rope to be **colorful**. She does not want two consecutive balloons to be of the same color, so she
 * asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a **0-indexed**
 * integer array `neededTime` where `neededTime[i]` is the time (in seconds) that Bob needs to remove the `ith` balloon
 * from the rope.
 *
 * Return *the **minimum time** Bob needs to make the rope **colorful***.
 *
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
const minCost = function (colors, neededTime) {
    let result = 0;

    for (let i = 0, max = 0; i < colors.length; i++) {
        result += neededTime[i];
        max = Math.max(max, neededTime[i]);

        if (colors[i] !== colors[i + 1]) {
            result -= max;
            max = 0;
        }
    }

    return result;
};

const colors = 'abaac',
    neededTime = [1, 2, 3, 4, 5];
// Output: 3
/* Explanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.
Bob can remove the blue balloon at index 2. This takes 3 seconds.
There are no longer two consecutive balloons of the same color. Total time = 3. */
console.log(minCost(colors, neededTime));

const colors1 = 'abc',
    neededTime1 = [1, 2, 3];
// Output: 0
// Explanation: The rope is already colorful. Bob does not need to remove any balloons from the rope.
console.log(minCost(colors1, neededTime1));

const colors2 = 'aabaa',
    neededTime2 = [1, 2, 3, 4, 1];
// Output: 2
/* Explanation: Bob will remove the ballons at indices 0 and 4. Each ballon takes 1 second to remove.
There are no longer two consecutive balloons of the same color. Total time = 1 + 1 = 2. */
console.log(minCost(colors2, neededTime2));
