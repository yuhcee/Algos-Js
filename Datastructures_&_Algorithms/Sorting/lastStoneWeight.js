/**
 * **1046. Last Stone Weight**
 *
 * You are given an array of integers `stones` where `stones[i]` is the weight of the `ith` stone.
 *
 * We are playing a game with the stones. On each turn, we choose the **heaviest two stones** and smash them together. Suppose the heaviest two stones have weights `x` and `y` with `x <= y`. The result of this smash is:
 *
 * If `x == y`, both stones are destroyed, and
 * If `x != y`, the stone of weight `x` is destroyed, and the stone of weight `y` has new weight `y - x`.
 * At the end of the game, there is at **most one stone** left.
 *
 * Return *the smallest possible weight of the left stone*. If there are no stones left, return `0`.
 *
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
    // implement a queue-like logic
    while (stones.length > 1) {
        // sort the remaining stones in descending order
        stones.sort((a, b) => b - a);

        // smash the first and second stones, two largest and assign the remaining value to the first index
        stones[1] = stones[0] - stones[1];

        // shift the array to get rid of the 0th index
        stones.shift();
    }
    // return the 0 index,the remaining stone left
    return stones[0];
};

const stones = [2,7,4,1,8,1] // Output: 1
const stones2 = [1] // Output: 1

console.log(lastStoneWeight(stones));
console.log(lastStoneWeight(stones2));