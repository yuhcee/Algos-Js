/**
 * **Remove All Adjacent Duplicates in String II**
 *
 * You are given a string s and an integer `k`, a `k` **duplicate removal** consists of choosing
 * `k` adjacent and equal letters from s and removing them, causing the left and the right side
 * of the deleted substring to concatenate together.
 *
 * We repeatedly make `k` **duplicate removals** on `s` until we no longer can.
 *
 * Return *the final string after all such duplicate removals have been made. It is guaranteed
 * that the answer is unique*.
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const removeDuplicates = (s, k) => {
    const stack = [];

    for (let char of s) {
        if (stack.length === 0 || stack.at(-1) !== char) {
            stack.push({ char, count: 1 });
            continue;
        }

        stack.at(-1).count++;

        if (stack.at(-1).count === k) stack.pop();
    }

    return stack.map(({ char, count }) => char.repeat(count)).join('');
};
