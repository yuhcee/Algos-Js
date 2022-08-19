/**
 * **135. Candy**
 *
 * There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`.
 *
 * You are giving candies to these children subjected to the following requirements:
 *
 * - Each child must have at least one candy.
 * - Children with a higher rating get more candies than their neighbors.
 *
 * Return *the minimum number of candies you need to have to distribute the candies to the children*.
 *
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (ratings) => {
    const len = ratings.length,
        // Create a separate array to keep track of candy, start each child at 1 candy.
        candies = Array(len).fill(1);

    // Go through left to right.
    for (let i = 0; i < len - 1; i++) {
        // if the child on the right is ranked higher
        if (ratings[i] < ratings[i + 1]) {
            // that child gets 1 candy extra
            candies[i + 1] = candies[i] + 1;
        }
    }

    // Go through right to left.
    for (let i = len - 1; i > 0; i--) {
        // If the child to the left is ranked higher and has the same or fewer candies than the current child
        if (ratings[i] < ratings[i - 1] && candies[i] >= candies[i - 1]) {
            // that child gets exactly 1 more candy than the current child
            candies[i - 1] = candies[i] + 1;
        }
    }
    // Return the total candies held by all children
    return candies.reduce((acc, val) => acc + val);
};

const ratings = [1, 0, 2];
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
console.log(candy(ratings));

const ratings1 = [1, 2, 2];
// Output: 4
/* Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions. */
console.log(candy(ratings1));
