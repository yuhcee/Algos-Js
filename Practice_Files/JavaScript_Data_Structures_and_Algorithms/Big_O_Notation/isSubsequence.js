/**
 * **IsSubSequence**
 *
 * Write a function which takes two strings and checks whether the characters of the first string form a
 * subsequence of the characters in the second string.
 *
 * In other words, the function should check whether the characters in the first string appear somewhere in
 * the second string, **without their order changing**.
 *
 * Return *true if characters of the first string exist in their right ordering in the second string*.
 */
function isSubsequence() {
    // destructure variables from params arguments
    const [first, second] = arguments;

    // init two pointers
    let i = 0,
        j = 0;

    while (j < second.length) {
        // move the first char index if they match with second char
        if (first[i] === second[j]) i++;
        // return true, if first pointer equals length to indicate all exists
        if (i === first.length) return true;
        j++;
    }
    // return false
    return false;
}
