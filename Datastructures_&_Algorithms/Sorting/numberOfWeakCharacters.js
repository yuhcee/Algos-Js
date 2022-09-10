/**
 * **1996. The Number of Weak Characters in the Game**
 *
 * You are playing a game that contains multiple characters, and each of the characters has
 * **two** main properties: **attack** and **defense**. You are given a 2D integer array
 * `properties` where `properties[i] = [attacki, defensei]` represents the properties of the
 * `ith` character in the game.
 *
 * A character is said to be **weak** if any other character has **both** attack and defense
 * levels **strictly greater** than this character's attack and defense levels. More formally,
 * a character `i` is said to be **weak** if there exists another character `j` where `attackj
 * > attacki` and `defensej > defensei`.
 *
 * Return *the number of weak characters*.
 *
 * @param {number[][]} properties
 * @return {number}
 */
const numberOfWeakCharacters = (properties, count = 0, max_d = 0) => {
    properties
        .sort((a, b) => b[0] - a[0] || a[1] - b[1])
        .forEach((res) => {
            if (res[1] < max_d) count++;
            if (res[1] > max_d) max_d = res[1];
        });
    return count;
};

const properties = [
    [5, 5],
    [6, 3],
    [3, 6],
];
// Output: 0
// Explanation: No character has strictly greater attack and defense than the other.
console.log(numberOfWeakCharacters(properties));

const properties1 = [
    [2, 2],
    [3, 3],
];
// Output: 1
// Explanation: The first character is weak because the second character has a strictly greater attack and defense.
console.log(numberOfWeakCharacters(properties1));

const properties2 = [
    [1, 5],
    [10, 4],
    [4, 3],
];
// Output: 1
// Explanation: The third character is weak because the second character has a strictly greater attack and defense.
console.log(numberOfWeakCharacters(properties2));
