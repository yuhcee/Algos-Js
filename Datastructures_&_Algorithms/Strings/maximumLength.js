/**
 * **2981. Find Longest Special Substring That Occurs Thrice I**
 *
 * You are given a string `s` that consists of lowercase English letters.
 *
 * A string is called **special** if it is made up of only a single character.
 * For example, the string "abc" is not special, whereas the strings `"ddd"`,
 * `"zz"`, and `"f"` are special.
 *
 * Return *the length of the **longest special substring** of `s` which occurs
 * **at least thrice**, or `-1` if no special substring occurs at least thrice.*
 *
 * A **substring** is a contiguous **non-empty** sequence of characters within
 * a string.
 *
 * **Constraints:**
 *
 * - `3 <= s.length <= 50`
 * - `s` consists of only lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */
const maximumLength = function (s) {
    const n = s.length;

    // Helper function to check if a string is special
    const isSpecial = (str) => str.split('').every((ch) => ch === str[0]);

    // Iterate over lengths in descending order
    for (let len = n; len >= 1; len--) {
        const substringCount = new Map();

        // Sliding window to generate substrings of length `len`
        for (let i = 0; i <= n - len; i++) {
            const substring = s.slice(i, i + len);

            if (!isSpecial(substring)) continue;

            // Count occurrences of special substrings
            substringCount.set(substring, (substringCount.get(substring) || 0) + 1);

            // If any substring occurs at least 3 times, return its length
            if (substringCount.get(substring) >= 3) {
                return len;
            }
        }
    }

    // No valid substring found
    return -1;
};
