/**
 * **2306. Naming a Company**
 *
 * You are given an array of strings ideas that represents a list of names to be used in the process
 * of naming a company. The process of naming a company is as follows:
 *
 * 1. Choose 2 **distinct** names from `ideas`, call them `ideaA` and `ideaB`.
 *
 * 2. Swap the first letters of `ideaA` and `ideaB` with each other.
 *
 * 3. If both of the new names are not found in the original ideas, then the name `ideaA` `ideaB`
 * (the **concatenation** of `ideaA` and `ideaB`, separated by a space) is a valid company name.
 *
 * 4. Otherwise, it is not a valid name.
 *
 * Return the number of distinct valid names for the company.
 *
 * **Constraints:**
 *
 * - `2 <= ideas.length <= 5 * 104`
 * - `1 <= ideas[i].length <= 10`
 * - `ideas[i]` consists of lowercase English letters.
 * - All the strings in `ideas` are **unique**.
 *
 * @param {string[]} ideas
 * @return {number}
 */
const distinctNames = function (ideas) {
    // Create a map to store first letters of names as keys and sets of suffixes as values
    const suffixes = new Map();

    // Loop through each idea to separate the first letter and suffix
    for (const idea of ideas) {
        const first = idea[0];
        const suffix = idea.substring(1);
        // Check if the first letter is already in the map, if not add it and an empty set for its suffixes
        if (!suffixes.has(first)) {
            suffixes.set(first, new Set());
        }
        // Add the suffix to the set for the corresponding first letter
        suffixes.get(first).add(suffix);
    }

    let result = 0;

    // Loop through each combination of two first letters
    for (const [letterA, suffA] of suffixes) {
        for (const [letterB, suffB] of suffixes) {
            // Skip if the letters are the same
            if (letterA === letterB) {
                continue;
            }
            // Calculate the number of intersecting suffixes between the two sets
            let intersections = 0;
            for (const suffix of suffA) {
                if (suffB.has(suffix)) {
                    intersections++;
                }
            }
            // Calculate the number of distinct names that can be formed from each set
            const distinctA = suffA.size - intersections;
            const distinctB = suffB.size - intersections;
            // Add the number of distinct names for this combination of first letters to the result
            result += distinctA * distinctB;
        }
    }

    return result;
};

const ideas = ['coffee', 'donuts', 'time', 'toffee'];
// Output: 6
/* Explanation: The following selections are valid:
- ("coffee", "donuts"): The company name created is "doffee conuts".
- ("donuts", "coffee"): The company name created is "conuts doffee".
- ("donuts", "time"): The company name created is "tonuts dime".
- ("donuts", "toffee"): The company name created is "tonuts doffee".
- ("time", "donuts"): The company name created is "dime tonuts".
- ("toffee", "donuts"): The company name created is "doffee tonuts".
Therefore, there are a total of 6 distinct company names.

The following are some examples of invalid selections:
- ("coffee", "time"): The name "toffee" formed after swapping already exists in the original array.
- ("time", "toffee"): Both names are still the same after swapping and exist in the original array.
- ("coffee", "toffee"): Both names formed after swapping already exist in the original array. */
console.log(distinctNames(ideas));

const ideas1 = ['lack', 'back'];
// Output: 0
// Explanation: There are no valid selections. Therefore, 0 is returned.
console.log(distinctNames(ideas1));
