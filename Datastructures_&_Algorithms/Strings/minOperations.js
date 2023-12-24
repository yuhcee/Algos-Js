/**
 * **1758. Minimum Changes To Make Alternating Binary String**
 *
 * You are given a string `s` consisting only of the characters `'0'`
 * and `'1'`. In one operation, you can change any `'0'` to `'1'` or
 * vice versa.
 *
 * The string is called alternating if no two adjacent characters are
 * equal. For example, the string `"010"` is alternating, while the
 * string `"0100"` is not.
 *
 * Return *the **minimum** number of operations needed to make s
 * alternating*.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 104`
 * - `s[i]` is either `'0'` or `'1'`.
 *
 * @param {string} s
 * @return {number}
 */
const minOperations = function (s) {
    // Function to count operations for a given starting character
    const countOperations = (startChar) => {
        let operations = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== startChar) {
                operations++;
            }
            // Toggle the starting character for the next position
            startChar = startChar === '0' ? '1' : '0';
        }
        return operations;
    };

    // Count operations for both starting characters and return the minimum
    return Math.min(countOperations('0'), countOperations('1'));
};
