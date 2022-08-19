/**
 * There are several cards arranged in a row, and each card has an associated **number of
 * points**. The points are given in the integer array `cardPoints`.
 *
 * In one step, you can take one card from the beginning or from the end of the row. You have to
 * take exactly `k` cards.
 *
 * Your score is the sum of the points of the cards you have taken.
 *
 * Given the integer array cardPoints and the integer k, return the maximum score you can obtain.
 *
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = (cardPoints, k) => {
    const fullSum = cardPoints.reduce((sum, points) => sum + points, 0);
    let maxSum = 0;
    let left = 0;
    let right = cardPoints.length - 1 - k;
    let currSum = cardPoints.slice(left, right + 1).reduce((sum, points) => sum + points, 0);

    while (right <= cardPoints.length - 1) {
        maxSum = Math.max(maxSum, fullSum - currSum);

        currSum -= cardPoints[left];
        left += 1;
        right += 1;
        currSum += cardPoints[right];
    }
    return maxSum;
};

const cardPoints = [1, 2, 3, 4, 5, 6, 1],
    k = 3;
// Output: 12
/* Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12. */
console.log(maxScore(cardPoints, k));

const cardPoints1 = [2, 2, 2],
    k1 = 2;
// Output: 4
// Explanation: Regardless of which two cards you take, your score will always be 4.
console.log(maxScore(cardPoints1, k1));

const cardPoints2 = [9, 7, 7, 9, 7, 7, 9],
    k2 = 7;
// Output: 55
// Explanation: You have to take all the cards. Your score is the sum of points of all cards.
