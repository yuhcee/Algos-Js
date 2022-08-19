/**
 * **Max Sub Array Sum - Sliding Window**
 *
 * Write a function that accepts an array of `integers`, and a number called `n`.
 * The function should calculate the maximum sum of `n` consecutive elements in the array.
 *
 * Return *the maximum sum of `n` consecutive elements in the array, otherwise return null*.
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
    // if array length is less than target, return null
    if (arr.length < n) return null;

    // init function variables
    let maxSum = 0,
        tempSum = 0;
    let { max } = Math;

    let i = 0;
    // sum up consecutive integers of n
    while (i < n) {
        maxSum += arr[i];
        i++;
    }

    // temp reassign maxSum to temp variable
    tempSum = maxSum;

    // loop thru arr n times
    for (let j = n; j < arr.length; j++) {
        // subtract first element from tempSum, and add current
        tempSum = tempSum - arr[j - n] + arr[j];
        // select maxSum
        maxSum = max(maxSum, tempSum);
    }

    return maxSum;
};

console.log(maxSubArrSum([1, 2, 3, 4, 5, 6], 2));
console.log(maxSubArrSum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubArrSum([1, 4, 2, 10, 23, 3, 1, 0, 20, 6], 4));
console.log(maxSubArrSum([100, 200, 300, 400], 2));
console.log(maxSubArrSum([], 4));
console.log(maxSubArrSum([2, 3], 3));
