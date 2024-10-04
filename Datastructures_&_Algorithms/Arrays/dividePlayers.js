/**
 * **2491. Divide Players Into Teams of Equal Skill**
 *
 * You are given a positive integer array `skill` of **even** length `n`
 * where `skill[i]` denotes the skill of the `ith` player. Divide the
 * players into `n / 2` teams of size `2` such that the total skill of
 * each team is **equal**.
 *
 * The **chemistry** of a team is equal to the **product** of the skills
 * of the players on that team.
 *
 * Return *the sum of the **chemistry** of all the teams, or return `-1` if
 * here is no way to divide the players into teams such that the total skill
 * of each team is equal*.
 *
 * **Constraints:**
 *
 * - `2 <= skill.length <= 105`
 * - `skill.length is even.`
 * - `1 <= skill[i] <= 1000`
 *
 * @param {number[]} skill
 * @return {number}
 */
const dividePlayers = function (skill) {
    const n = skill.length;

    // Step 1: Sort the array in ascending order
    skill.sort((a, b) => a - b);

    // Step 2: Initialize target sum and chemistry sum
    const targetSum = skill[0] + skill[n - 1];
    let chemistrySum = 0;

    // Step 3: Iterate through the array and validate pairs
    for (let i = 0; i < n / 2; i++) {
        const left = skill[i];
        const right = skill[n - 1 - i];

        // Check if the current pair sums up to the target sum
        if (left + right !== targetSum) {
            return -1; // It's impossible to form the required teams
        }

        // Add the product of the current pair to the chemistry sum
        chemistrySum += left * right;
    }

    // Step 4: Return the total chemistry sum
    return chemistrySum;
};

const skill = [3, 2, 5, 1, 3, 4];
// Output: 22
/* Explanation: 
Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22. */
console.log(dividePlayers(skill));

const skill1 = [3, 4];
// Output: 12
/* Explanation: 
The two players form a team with a total skill of 7.
The chemistry of the team is 3 * 4 = 12.
 */
console.log(dividePlayers(skill1));

const skill2 = [1, 1, 2, 3];
// Output: -1
/* Explanation: 
There is no way to divide the players into teams such that the total skill of each team is equal. */
console.log(dividePlayers(skill2));
