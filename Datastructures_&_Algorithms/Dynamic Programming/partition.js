/**
 * **131. Palindrome Partitioning**
 *
 * Given a string `s`, partition `s` such that every `substring` of the partition is a **palindrome.**
 * Return *all possible palindrome partitioning of `s`*.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 16`
 * - `s` contains only lowercase English letters.
 *
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
    let result = [];
    backtrack(s, [], result);
    return result;
};

function backtrack(s, temp, result) {
    // base case: if the current string is empty, add the current partition to the result
    if (s.length === 0) {
        result.push(temp.slice());
        return;
    }
    // try partitioning the current string into a palindrome substring
    for (let i = 1; i <= s.length; i++) {
        let sub = s.substring(0, i);
        if (isPalindrome(sub)) {
            // if the substring is a palindrome, add it to the current partition and continue the backtracking process
            temp.push(sub);
            backtrack(s.substring(i), temp, result);
            temp.pop();
        }
    }
}

function isPalindrome(s) {
    // helper function to check if a string is a palindrome
    return s === s.split('').reverse().join('');
}
