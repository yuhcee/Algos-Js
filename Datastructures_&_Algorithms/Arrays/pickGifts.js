/**
 * **2558. Take Gifts From the Richest Pile**
 *
 * You are given an integer array `gifts` denoting the number of gifts in
 * various piles. Every second, you do the following:
 *
 * - Choose the pile with the maximum number of gifts.
 * - If there is more than one pile with the maximum number of gifts, choose
 * any.
 * - Leave behind the floor of the square root of the number of gifts in the
 * pile. Take the rest of the gifts.
 *
 * Return the number of gifts remaining after k seconds.
 *
 * **Constraints:**
 *
 * - `1 <= gifts.length <= 103`
 * - `1 <= gifts[i] <= 109`
 * - `1 <= k <= 103`
 *
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
const pickGifts = function (gifts, k) {
    const { max, sqrt, floor } = Math;

    while (k > 0) {
        const maxIndex = gifts.indexOf(max(...gifts));

        gifts[maxIndex] = floor(sqrt(gifts[maxIndex]));
    }

    const sum = gifts.reduce((acc, val) => acc + val, 0);

    return sum;
};
