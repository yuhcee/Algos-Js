/**
 * **1963. Minimum Number of Swaps to Make the String Balanced**
 *
 * You are given a **0-indexed** string `s` of **even** length `n`. The
 * string consists of **exactly** `n / 2` opening brackets `'['` and `n /
 * 2` closing brackets `']'`.
 *
 * A string is called **balanced** if and only if:
 *
 * - It is the empty string, or
 * - It can be written as `AB`, where both `A` and `B` are **balanced**
 * strings, or
 * - It can be written as `[C]`, where `C` is a **balanced** string.
 *
 * You may swap the brackets at **any** two indices **any** number of
 * times.
 *
 * Return *the **minimum** number of swaps to make s **balanced***.
 *
 * **Constraints:**
 *
 * - `n == s.length`
 * - `2 <= n <= 106`
 * - `n` is even.
 * - `s[i]` is either `'['` or `']'`.
 * - The number of opening brackets `'['` equals `n / 2`, and the number
 * of closing brackets `']'` equals `n / 2`.
 *
 * @param string s
 * @return number**
 */
const minSwaps = function (s) {
    let imbalance = 0; // To track the current balance of brackets
    let maxImbalance = 0; // Track the maximum imbalance encountered

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[') {
            imbalance++; // Increase balance for each opening bracket
        } else {
            imbalance--; // Decrease balance for each closing bracket
        }

        // If the imbalance goes negative, we have more closing brackets than opening
        if (imbalance < 0) {
            maxImbalance = Math.max(maxImbalance, -imbalance);
        }
    }

    // Minimum number of swaps needed to balance the string
    // Each swap can fix two unbalanced brackets (one closing and one opening)
    return Math.ceil(maxImbalance / 2);
};
