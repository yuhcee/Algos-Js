/**
 * **2024. Maximize the Confusion of an Exam**
 *
 * A teacher is writing a test with `n` true/false questions, with `'T'` denoting true and `'F'` denoting
 * false. He wants to confuse the students by **maximizing** the number of **consecutive** questions with
 * the **same** answer (multiple trues or multiple falses in a row).
 *
 * You are given a string `answerKey`, where `answerKey[i]` is the original answer to the `ith` question.
 * In addition, you are given an integer `k`, the maximum number of times you may perform the following
 * operation:
 *
 * - Change the answer key for any question to `'T'` or `'F'` (i.e., set answerKey[i] to `'T'` or `'F'`).
 *
 * Return *the maximum number of consecutive `'T'`s or 'F's in the answer key after performing the
 * operation at most `k` times*.
 *
 * **Constraints:**
 *
 * - `n == answerKey.length`
 * - `1 <= n <= 5 * 104`
 * - `answerKey[i]` is either `'T'` or `'F'`
 * - `1 <= k <= n`
 *
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
function maxConsecutiveAnswers(answerKey, k) {
    let j = 0; // maximum count of consecutive 'T's or 'F's
    let cnt = { T: 0, F: 0 }; // counts of 'T's and 'F's
    const n = answerKey.length;

    for (let i = 0; i < n; i++) {
        cnt[answerKey[i]]++; // increment the count of the current answer

        // If the minimum count of 'T's or 'F's within the window is greater than k,
        // reduce the count of the answer at the window's start and move the window
        if (Math.min(cnt.T, cnt.F) > k) {
            cnt[answerKey[i - j]]--; // decrement the count of the answer at the window's start
            j--; // reduce the window size
        }

        j++; // increment the window size
    }

    return j; // return the maximum count of consecutive 'T's or 'F's
}
const answerKey = 'TTFF',
    k = 2;
// Output: 4
/* Explanation: We can replace both the 'F's with 'T's to make answerKey = "TTTT".
There are four consecutive 'T's.*/
console.log(maxConsecutiveAnswers(answerKey, k));
