/**
 * **763. Partition Labels**
 *
 *
 * You are given a string `s`. We want to partition the string into as many parts as possible so
 * that each letter appears in at most one part. For example, the string `"ababcc"` can be
 * partitioned into `["abab", "cc"]`, but partitions such as `["aba", "bcc"]` or `["ab", "ab", "cc"]
 * ` are invalid.
 *
 * Note that the partition is done so that after concatenating all the parts in order, the resultant
 * string should be `s`.
 *
 * Return a list of integers representing the size of these parts.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 500`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function (s) {
    // Step 1: Record the last occurrence of each character
    const last = new Array(26).fill(-1);
    for (let i = 0; i < s.length; i++) {
        last[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }

    // Step 2: Greedy partitioning
    const result = [];
    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        // Update end to the farthest last occurrence of any character seen so far
        end = Math.max(end, last[s.charCodeAt(i) - 'a'.charCodeAt(0)]);

        // If we’ve reached the end of the current part
        if (i === end) {
            result.push(end - start + 1);
            start = i + 1;
        }
    }

    return result;
};

const s = 'ababcbacadefegdehijhklij';
// Output: [9,7,8]
/* Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts. */
console.log(partitionLabels(s)); // [9, 7, 8]

const s1 = 'eccbbbbdec';
// Output: [10]
console.log(partitionLabels(s1)); // [10]

const s2 = 'caedbdedda';
// Output: [1, 9]
/* Explanation:
The partition is "caedb", "dedda".
This is a partition so that each letter appears in at most one part.
A partition like "caedbded", "da" is incorrect, because it splits s into less parts. */
console.log(partitionLabels(s2)); // [1, 9]
