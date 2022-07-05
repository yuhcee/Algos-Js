/**
 * **
 * 135. Candy**
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
        
    }
};
