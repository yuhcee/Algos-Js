/**
 * **823. Binary Trees With Factors**
 *
 * Given an array of unique integers, `arr`, where each integer `arr[i]` is strictly greater than `1`.
 *
 * We make a binary tree using these integers, and each number may be used for any number of times. Each
 * non-leaf node's value should be equal to the product of the values of its children.
 *
 * Return *the number of binary trees we can make. The answer may be too large so return the answer
 * **modulo** 109 + 7*.
 *
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
    // hosts the number of possible trees for a given num
    const dp = {};
    const mod = 10 ** 9 + 7;

    // sorting the nums in increasing order
    arr.sort((a, b) => a - b);
    // every num would at least have a tree with itself as the root and nothing else
    for (let num of arr) dp[num] = 1;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        // for a given num, we'll try to find the factor pairs which are present in the arr
        for (let j = i - 1; j >= 0; j--) {
          if (num % arr[j] === 0) {
            // found first factor
            const firstFactor = arr[j];
            const secondFactor = num / firstFactor;
            
          }
        }
      }
      
};
