/**
 * **846. Hand of Straights**
 *
 * Alice has some number of cards and she wants to rearrange the cards into
 * groups so that each group is of size `groupSize`, and consists of `groupSize`
 * consecutive cards.
 *
 * Given an integer array `hand` where `hand[i]` is the value written on the
 * `ith` card and an integer groupSize, return `true` if she can rearrange the
 * cards, or `false` otherwise.
 *
 * **Constraints:**
 *
 * - `1 <= hand.length <= 104`
 * - `0 <= hand[i] <= 109`
 * - `1 <= groupSize <= hand.length`
 *
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
const isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    // Frequency map to count occurrences of each card
    let freqMap = {};
    for (let card of hand) {
        if (!freqMap[card]) {
            freqMap[card] = 0;
        }
        freqMap[card]++;
    }

    // Sort the unique card values
    let uniqueCards = Object.keys(freqMap)
        .map(Number)
        .sort((a, b) => a - b);

    for (let card of uniqueCards) {
        // If the card has been used up in forming previous groups, continue
        if (freqMap[card] === 0) {
            continue;
        }

        let count = freqMap[card];

        // Try to form a group starting from this card
        for (let i = 0; i < groupSize; i++) {
            let currentCard = card + i;
            if (!freqMap[currentCard] || freqMap[currentCard] < count) {
                return false;
            }
            freqMap[currentCard] -= count;
        }
    }

    return true;
};
const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8],
    groupSize = 3;
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
console.log(isNStraightHand(hand, groupSize));
