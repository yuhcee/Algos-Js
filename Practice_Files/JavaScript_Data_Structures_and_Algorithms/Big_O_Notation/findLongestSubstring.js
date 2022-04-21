/**
 * **Sliding Window - Find Longest Substring**
 *
 * Write a function called **findLongestSubString**, which accepts a string and returns the length of the
 * longest substringwith all distinct characters.
 *
 * @param {*} str
 */
function findLongestSubstring(str) {
    let longest = 0,
        start = 0,
        seen = {},
        { max } = Math;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // check if char has been seen before
        if (seen[char]) {
            start = max(start, seen[char]);
        }
        //index - beginning of substring + 1 (to include current in count)
        longest = max(longest, i - start + 1);

        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    // return longest SubString
    return longest;
}

console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('awesome'));
console.log(findLongestSubstring('combs'));
console.log(findLongestSubstring('alibaba'));
console.log(findLongestSubstring('alba'));
console.log(findLongestSubstring('aba'));
console.log(findLongestSubstring('bb'));