/**
 * **Max Sub Array Sum**
 *
 * Write a function that accepts an array of `integers`, and a number called `n`.
 * The function should calculate the maximum sum of `n` consecutive elements in the array.
 *
 * Return *the maximum sum of `n`consecutive elements in the array, otherwise return null*.
 *
 * @param {*} arr
 * @param {*} num
 */
const maxSubArraySum = (arr, n) => {
    // check if arr is not empty
    if (arr.length === 0) return null;

    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp += arr[i + j];
        }
        max = Math.max(max, temp);
    }
    return max;
};
console.log(maxSubArraySum([1, 2, 3, 4, 5, 6], 2));
console.log(maxSubArraySum([], 4));

const maxSubArrSum = (arr, n) => {
    let maxSum = 0,
        tempSum = 0;

    if (arr.length < n) return null;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;
    
    for (let j = n; j < arr.length; j++) {
        tempSum = tempSum - arr[j - n] + arr[j];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
};
console.log(maxSubArrSum([1, 2, 3, 4, 5, 6], 2));
console.log(maxSubArrSum([], 4));
