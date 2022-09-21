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
