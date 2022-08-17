/**
 * 47. Permutations II
 *
 * Given a collection of numbers, `nums`, that might contain duplicates, return *all possible unique
 * permutations **in any order***.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
    const sorted = nums.sort((a, b) => a - b),
        permutations = [];

    const recurse = (arr, permutation) => {
        if (!arr.length) return permutations.push(permutation);

        let previous = -Infinity;

        for (let i = 0; i < arr.length; i++) {
            if (previous === arr[i]) continue;

            let newArr = arr.slice(0, i).concat(arr.slice(i + 1));
            recurse(newArr, [...permutation, arr[i]]);

            previous = arr[i];
        }
    };
    recurse(sorted, []);

    return permutations;
};

const nums = [1, 1, 2];
/* Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]] */

const nums1 = [1, 2, 3];
/* Output: [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
]; */

console.log(permuteUnique(nums));
console.log(permuteUnique(nums1));
