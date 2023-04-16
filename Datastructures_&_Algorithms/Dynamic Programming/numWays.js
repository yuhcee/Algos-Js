/**
 * **1639. Number of Ways to Form a Target String Given a Dictionary**
 *
 * You are given a list of strings of the **same length** `words` and a string `target`.
 *
 * Your task is to form `target` using the given `words` under the following rules:
 *
 * - `target` should be formed from left to right.
 * - To form the `ith`character (**0-indexed**) of `target`, you can choose the `kth` character
 * of the `jth` string in `words` if `target[i] = words[j][k]`.
 * - Once you use the `kth` character of the `jth` string of `words`, you can no longer use the
 * `xth` character of any string in `words` where `x <= k`. In other words, all characters to
 * the left of or at index `k` become unusuable for every string.
 * - Repeat the process until you form the string `target`.
 *
 * **Notice** that you can use **multiple characters** from the **same string** in words
 * provided the conditions above are met.
 *
 * Return *the number of ways to form `target` from `words`*. Since the answer may be too
 * large, return it **modulo** 109 + 7.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 1000`
 * - `1 <= words[i].length <= 1000`
 * - All strings in `words` have the same length.
 * - `1 <= target.length <= 1000`
 * - `words[i]` and `target` contain only lowercase English letters.
 *
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
const numWays = function (words, target) {};
