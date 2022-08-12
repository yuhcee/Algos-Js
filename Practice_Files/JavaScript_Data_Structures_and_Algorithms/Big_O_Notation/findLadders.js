/**
 * **126. Word Ladder II**
 *
 * A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a
 * sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:
 *
 * - Every adjacent pair of words differs by a single letter.
 * - Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.
 * - `sk == endWord`
 *
 * Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return *all the **shortest transformation sequences** from `beginWord` to `endWord`, or an empty list if no such sequence exists. Each
 * sequence should be returned as a list of the words `[beginWord, s1, s2, ..., sk]`.
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = function (beginWord, endWord, wordList) {
     // to check if two words can connect
     let connected = (a, b) => {
        let c = 0;
        for (let i = 0; i < a.length && c < 2; i++) {
            if (a[i] !== b[i]) c++;
        }
        return c == 1;
    };

    // dictionary to help us search words faster
    // and to trackback what word was used
    let dict = new Set(wordList);
    if (dict.has(endWord) == false) return [];

    dict.delete(beginWord);
    let queue = [beginWord];
    let paths = [];

    // find all ways from beginning
    // level by level, until reach end at a level
    let reached = false;
    while (queue.length && !reached) {
        // update points of paths for this level
        paths.push(queue.slice());

        // access whole level
        let qlen = queue.length;
        for (let i = 0; i < qlen && !reached; i++) {
            // get the words in the record from the previous level
            let from = queue.shift();
            for (let to of dict) {
                // check if those word can connect to any word in dict
                if (connected(from, to) == false) continue;

                // if yes,
                // and one of them is endWord then we can stop from here
                if (to == endWord) {
                    reached = true;
                    break;
                }

                // otherwise,
                // update words for this level
                queue.push(to);

                // and delete "to" from dict to prevent a cycle
                dict.delete(to);
            }
        }
    }


    return ans;
};
