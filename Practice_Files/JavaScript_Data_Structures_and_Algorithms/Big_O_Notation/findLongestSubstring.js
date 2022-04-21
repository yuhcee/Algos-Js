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
        
    }

   
}


