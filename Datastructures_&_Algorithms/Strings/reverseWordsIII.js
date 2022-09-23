/**
 * **557. Reverse Words in a String III**
 *
 * Given a string `s`, reverse the order of characters in each word within a sentence while still preserving
 * whitespace and initial word order.
 *
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
    let reverseString = '';

    for (let i = s.length - 1; i >= 0; i--) {
        reverseString += s[i];
    }

    return reverseString.split(' ').reverse().join(' ');
};

const s = "Let's take LeetCode contest";
// Output: "s'teL ekat edoCteeL tsetnoc"

console.log(reverseWords(s));