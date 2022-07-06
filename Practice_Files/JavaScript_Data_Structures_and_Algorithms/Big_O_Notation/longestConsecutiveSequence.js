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
            if (nums[i] === nums[i - 1] + 1) {
                // if they're equal, update currentStreak
                currentStreak += 1;
            } else {
                // update the longestStreak, restart another streak
                longestStreak = Math.max(longestStreak, currentStreak);
                currentStreak = 1;
            }
        }
    }
    // return the maximum consecutive Streak
    return Math.max(longestStreak, currentStreak);
};

const nums = [100, 4, 200, 1, 3, 2];
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
console.log(longestConsecutive(nums));

const nums1 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// Output: 9
console.log(longestConsecutive(nums1));

const nums2 = [3, 7, 2, 8, 4, 6, 1, 9, 10];
// Output: 5
console.log(longestConsecutive(nums2));
