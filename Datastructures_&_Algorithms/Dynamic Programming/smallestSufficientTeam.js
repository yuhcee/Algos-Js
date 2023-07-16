/**
 * **1125. Smallest Sufficient Team**
 *
 * In a project, you have a list of required skills `req_skills`, and a list of people. The `ith`
 * person `people[i]` contains a list of skills that the person has.
 *
 * Consider a sufficient team: a set of people such that for every required skill in `req_skills`,
 * there is at least one person in the team who has that skill. We can represent these teams by the
 * index of each person.
 *
 * For example, `team = [0, 1, 3]` represents the people with skills `people[0]`, `people[1]`, and
 * `people[3]`.
 *
 * Return *any sufficient team of the smallest possible size, represented by the index of each
 * person*. You may return the answer in **any order**.
 *
 * It is **guaranteed** an answer exists.
 *
 * **Constraints:**
 *
 * - `1 <= req_skills.length <= 16`
 * - `1 <= req_skills[i].length <= 16`
 * - `req_skills[i]` consists of lowercase English letters.
 * - All the strings of `req_skills` are **unique**.
 * - `1 <= people.length <= 60`
 * - `0 <= people[i].length <= 16`
 * - `1 <= people[i][j].length <= 16`
 * - `people[i][j]` consists of lowercase English letters.
 * - `All the strings of `people[i]` are unique.
 * - Every skill in `people[i]` is a skill in `req_skills`.
 * - It is guaranteed a sufficient team exists.
 *
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
const smallestSufficientTeam = function (req_skills, people) {
    const skillIndexMap = new Map();

    // Create a map to store the index of each required skill
    req_skills.forEach((skill, index) => skillIndexMap.set(skill, index));

    // Create a map to store the minimum team for each skill mask
    const skillTeamMap = new Map([[0, []]]);

    // Iterate through each person's skills
    people.forEach((skills, index) => {
        let hisSkills = 0;

        // Convert the person's skills into a bitmask
        for (const skill of skills) {
            hisSkills |= 1 << skillIndexMap.get(skill);
        }

        // Iterate through each existing skill mask and update the minimum team
        for (const [currSkill, team] of skillTeamMap) {
            const totalSkills = currSkill | hisSkills;

            // If the current team already covers all the skills, no need to update
            if (totalSkills === currSkill) {
                continue;
            }

            // Update the minimum team if the new team is smaller
            if (!skillTeamMap.has(totalSkills) || team.length + 1 < skillTeamMap.get(totalSkills).length) {
                skillTeamMap.set(totalSkills, [...team, index]);
            }
        }
    });

    // Return the minimum team for the complete skill mask
    return skillTeamMap.get((1 << req_skills.length) - 1);
};

const req_skills = ['java', 'nodejs', 'reactjs'],
    people = [['java'], ['nodejs'], ['nodejs', 'reactjs']];
// Output: [0,2]
console.log(smallestSufficientTeam(req_skills, people));
