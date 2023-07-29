/**
 * **808. Soup Servings**
 *
 * There are two types of soup: **type A** and **type B**. Initially, we have n ml of each type of
 * soup. There are four kinds of operations:
 *
 * 1. Serve `100` ml of **soup A** and `0` ml of **soup B**,
 * 2. Serve `75` ml of **soup A** and `25` ml of **soup B**,
 * 3. Serve `50` ml of **soup A** and `50` ml of **soup B**, and
 * 4. Serve `25` ml of **soup A** and `75` ml of **soup B**.
 *
 * When we serve some soup, we give it to someone, and we no longer have it. Each turn, we will
 * choose from the four operations with an equal probability `0.25`. If the remaining volume of soup
 * is not enough to complete the operation, we will serve as much as possible. We stop once we no
 * longer have some quantity of both types of soup.
 *
 * **Note** that we do not have an operation where all `100` ml's of soup B are used first.
 *
 * Return the probability that **soup A** will be empty first, plus half the probability that **A**
 * and **B** become empty at the same time. Answers within `10-5` of the actual answer will be
 * accepted.
 *
 * **Constraints:**
 *
 * - `0 <= n <= 109`
 *
 * @param {number} n
 * @return {number}
 */
const soupServings = function (n) {
    // If n is too large, return 1 since it is certain that A will be empty first
    if (n >= 5000) {
        return 1;
    }

    // Define a helper function to calculate the probability using memoization
    const memo = new Map();
    const calculateProbability = (a, b) => {
        // If both a and b are 0, return 0.5 since A and B will be empty at the same time
        if (a <= 0 && b <= 0) {
            return 0.5;
        }
        // If only a is 0, return 1 since A will be empty first
        if (a <= 0) {
            return 1;
        }
        // If only b is 0, return 0 since A cannot be empty first
        if (b <= 0) {
            return 0;
        }

        // Check if the probability has already been calculated
        const key = `${a}-${b}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        // Calculate the probability recursively based on the four operations
        const probability = 0.25 * (calculateProbability(a - 100, b) + calculateProbability(a - 75, b - 25) + calculateProbability(a - 50, b - 50) + calculateProbability(a - 25, b - 75));

        // Memoize the result and return it
        memo.set(key, probability);
        return probability;
    };

    // Calculate the probability starting from n ml of soup A and B
    return calculateProbability(n, n);
};
