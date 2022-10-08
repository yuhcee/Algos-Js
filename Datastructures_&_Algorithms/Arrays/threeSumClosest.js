/**
 * **16. 3Sum Closest**
 *
 * Given an integer array `nums` of length `n` and an integer `target`, find three integers in
 * `nums` such that the sum is closest to `target`.
 *
 * Return *the sum of the three integers*.
 *
 * You may assume that each input would have exactly one solution.
 *
 * **Constraints:**
 *
 * - `3 <= nums.length <= 1000`
 * - `-1000 <= nums[i] <= 1000`
 * - `-104 <= target <= 104`
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    nums.sort((x, y) => x - y);
    let closest = Infinity;

    //Iterate through until 2 from end because there will be two pointers after
    //this idx to find threesums.
    for (let i = 0; i < nums.length - 2; i++) {
        //Stops us from doing repeat work.  If i is same as last, we have
        //Already checked all perms.
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];

            //If found, return target.
            if (total === target) return target;

            //Otherwise set closest to min of distance between current total and target, or
            //previous closest.
            closest = Math.abs(target - closest) < Math.abs(target - total) ? closest : total;

            //If current total is less than target, we know we need a higher number and arr
            //is sorted.  Incrementing left pointer and looping until we find a unique val
            //gives us the next highest number.  Side Note:  For this problem and the LC tests,
            //we do not need the loop in this block.  For larger data sets, it could save us from
            //a lot of repeat work though.  I left it in because I think it's a nice addition.  Feel free
            //to remove if you want though.  Won't change performance on LC test cases much.
            if (total < target) {
                left++;
                while (left < right && nums[i] === nums[i - 1]) left++;
            } else {
                right--;
                while (left < right && nums[right] === nums[right + 1]) right--;
            }
        }
    }
    return closest;
};

const nums = [-1, 2, 1, -4],
    target = 1;
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
console.log(threeSumClosest(nums, target));
