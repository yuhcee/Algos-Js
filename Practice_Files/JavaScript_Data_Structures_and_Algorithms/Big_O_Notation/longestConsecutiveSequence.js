/**
 * **128. Longest Consecutive Sequence**
 *
 * Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.
 *
 * You must write an algorithm that runs in `O(n)` time.
 *
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
    // take care of empty array
    if (nums.length < 1) return nums.length;

    let currentStreak = 1,
        longestStreak = 1;

    // sort arr in ascending order
    nums.sort((a, b) => a - b);

    // iterate through nums arr
    for (let i = 1; i < nums.length; i++) {
        // if two consecutive elems are not same
        if (nums[i] !== nums[i - 1]) {
            // check if their diff is equal to 1, ie consecutive
            if(nums[i] === nums[i - 1] + 1) {

            }
        }
    }
};
