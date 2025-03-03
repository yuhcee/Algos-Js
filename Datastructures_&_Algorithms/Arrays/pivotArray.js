/**
 * **2161. Partition Array According to Given Pivot**
 *
 * You are given a **0-indexed** integer array `nums` and an integer `pivot`. Rearrange `nums`
 * such that the following conditions are satisfied:
 *
 * - Every element less than `pivot` appears **before** every element greater than `pivot`.
 * - Every element equal to `pivot` appears **in between** the elements less than and greater
 * than `pivot`.
 * - The **relative order** of the elements less than `pivot` and the elements greater than
 * `pivot` is maintained.
 *  - More formally, consider every `pi`, `pj` where `pi` is the new position of the ith element
 * and `pj` is the new position of the `jth` element. If `i < j` and **both** elements are
 * smaller (or larger) than `pivot`, then `pi < pj`.
 *
 * Return `nums` after the rearrangement.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `-106 <= nums[i] <= 106`
 * - `pivot` equals to an element of `nums`.
 *
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = function (nums, pivot) {};
