/**
 * **985. Sum of Even Numbers After Queries**
 *
 * You are given an integer array `nums` and an array `queries` where `queries[i] = [vali, indexi]`.
 *
 * For each query `i`, first, apply `nums[indexi] = nums[indexi] + vali`, then print the sum of the even
 * values of `nums`.
 *
 * Return *an integer array `answer` where `answer[i]` is the answer to the ith query*.
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function (nums, queries) {
    // Sum of all the even numbers
    let evenSum = nums.reduce((acc, curr) => (curr % 2 === 0 ? curr + acc : acc), 0);

    const res = [];

    for (let [val, ind] of queries) {
        // if the number at that index is even, subtract it because we are anyway going to
        // add the query's value to that number and check if that is even/not
        if (nums[ind] % 2 === 0) {
            evenSum -= nums[ind];
        }
        // adding the query's value
        nums[ind] += val;

        // checking even/not after adding the query's value.
        // If even, that would add up to our existing evenSum
        if (nums[ind] % 2 === 0) {
            evenSum += nums[ind];
        }
        res.push(evenSum);
    }

    return res;
};

const nums = [1, 2, 3, 4],
    queries = [
        [1, 0],
        [-3, 1],
        [-4, 0],
        [2, 3],
    ];
// Output: [8, 6, 2, 4];
/* Explanation: At the beginning, the array is [1,2,3,4].
After adding 1 to nums[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
After adding -3 to nums[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
After adding -4 to nums[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
After adding 2 to nums[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4. */
