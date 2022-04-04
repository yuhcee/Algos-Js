/**
 * *31. Next Permutation*
 *
 * A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
 *
 * For example, for arr = [1,2,3], the following are considered permutations of arr: [12,3], [1,3,2], [3,1,2], [2,3,1].
 *
 * The next permutation of an array of integers is the next lexicographically greater
 * permutation of its integer. More formally, if all the permutations of the array are
 * sorted in one container according to their lexicographical order, then the next
 * permutation of that array is the permutation that follows it in the sorted
 * container. If such arrangement is not possible, the array must be rearranged as the
 * lowest possible order (i.e., sorted in ascending order).
 *
 * For example, the next permutation of arr = [1,2,3] is [1,3,2].
 * Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
 * While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have
 * a lexicographical larger rearrangement.
 *
 * Given an array of integers nums, find the next permutation of nums.
 *
 * The replacement must be in place and use only constant extra memory.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums) => {
    const last_index = nums.length - 1;

    let first_index;
    let second_index;

    // get the first index
    for (first_index = last_index - 1; first_index >= 0; first_index--) {
        if (nums[first_index] < nums[first_index + 1]) {
            break;
        }
    }

    //if we dont get first index we will just reverse the array
    if (first_index < 0) {
        nums.reverse();
    } else {
        //get second index from last
        for (second_index = last_index; second_index > first_index; second_index--) {
            if (nums[second_index] > nums[first_index]) {
                break;
            }
        }

        
    }
};
