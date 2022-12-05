/**
 * **899. Orderly Queue**
 *
 * You are given a string `s` and an integer `k`. You can choose one of the first `k` letters of `s` and append it
 * at the end of the string..
 *
 * Return the *lexicographically smallest string you could have after applying the mentioned step any number of
 * moves*.
 *
 * **Constraints:**
 *
 * - `1 <= k <= s.length <= 1000`
 * - `s` consist of lowercase English letters.
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
    if (k === 1) {
        let answer = s;

        for (let i = 0; i < s.length; i++) {
            const compareString = s.substring(i) + s.substring(0, i);

            // localcompare string using localeCompare() method - javascript
            if (answer.localeCompare(compareString) > 0) {
                answer = s.substring(i) + s.substring(0, i);
            }
        }

        return answer;
    }

    // if k > 1
    return s.split('').sort().join('');
};

const s = 'cba',
    k = 1;
// Output: "acb"
/* Explanation: 
In the first move, we move the 1st character 'c' to the end, obtaining the string "bac".
In the second move, we move the 1st character 'b' to the end, obtaining the final result "acb". */
console.log(orderlyQueue(s, k));

const s1 = 'baaca',
    k1 = 3;
// Output: "aaabc"
/* Explanation: 
In the first move, we move the 1st character 'b' to the end, obtaining the string "aacab".
In the second move, we move the 3rd character 'c' to the end, obtaining the final result "aaabc". */
console.log(orderlyQueue(s1, k1));
