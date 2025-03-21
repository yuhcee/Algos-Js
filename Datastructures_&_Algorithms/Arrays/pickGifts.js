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

        k--;
    }

    const sum = gifts.reduce((acc, val) => acc + val, 0);

    return sum;
};

const gifts = [25, 64, 9, 4, 100],
    k = 4;
// Output: 29
/* Explanation: 
The gifts are taken in the following way:
- In the first second, the last pile is chosen and 10 gifts are left behind.
- Then the second pile is chosen and 8 gifts are left behind.
- After that the first pile is chosen and 5 gifts are left behind.
- Finally, the last pile is chosen again and 3 gifts are left behind.
The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29. */
console.log(pickGifts(gifts, k));

const gifts1 = [1, 1, 1, 1],
    k1 = 4;
// Output: 4
/* Explanation: 
In this case, regardless which pile you choose, you have to leave behind 1 gift in each pile. 
That is, you can't take any pile with you. 
So, the total gifts remaining are 4. */
console.log(pickGifts(gifts1, k1));
