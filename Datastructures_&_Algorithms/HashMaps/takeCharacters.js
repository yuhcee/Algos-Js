/**
 * **2516. Take K of Each Character From Left and Right**
 *
 * You are given a string `s` consisting of the characters `'a'`, `'b'`, and `'c'` and a non-negative
 * integer `k`. Each minute, you may take either the leftmost character of `s`, or the **rightmost**
 * character of `s`.
 *
 * Return *the **minimum** number of minutes needed for you to take **at least** `k` of each character, or
 * return `-1` if it is not possible to take `k` of each character.*
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s` consists of only the letters `'a'`, `'b'`, and `'c'`.
 * - `0 <= k <= s.length`
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const takeCharacters = function (s, k) {
    const n = s.length;
    const count = { a: 0, b: 0, c: 0 };

    // Count occurrences of each character
    for (const char of s) {
        count[char]++;
    }

    // If any character occurs less than k times, it's impossible
    if (count['a'] < k || count['b'] < k || count['c'] < k) {
        return -1;
    }

    // Find the maximum size of a valid subarray
    let maxSubarraySize = 0;
    let left = 0;
    const currentCount = { a: 0, b: 0, c: 0 };

    for (let right = 0; right < n; right++) {
        currentCount[s[right]]++;

        // Ensure at least k of each character is left outside the window
        while (currentCount['a'] > count['a'] - k || currentCount['b'] > count['b'] - k || currentCount['c'] > count['c'] - k) {
            currentCount[s[left]]--;
            left++;
        }

        // Update the maximum size of the valid subarray
        maxSubarraySize = Math.max(maxSubarraySize, right - left + 1);
    }

    // Minimum minutes = total length - max valid subarray size
    return n - maxSubarraySize;
};

const s = 'aabaaaacaabc',
    k = 2;
// Output: 8
/* Explanation: 
Take three characters from the left of s. You now have two 'a' characters, and one 'b' character.
Take five characters from the right of s. You now have four 'a' characters, two 'b' characters, and two 'c' characters.
A total of 3 + 5 = 8 minutes is needed.
It can be proven that 8 is the minimum number of minutes needed. */
console.log(takeCharacters(s, k));

const s1 = 'a',
    k1 = 1;
// Output: -1
// Explanation: It is not possible to take one 'b' or 'c' so return -1.
console.log(takeCharacters(s1, k1));
