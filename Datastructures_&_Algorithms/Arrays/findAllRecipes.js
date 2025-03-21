/**
 * **2115. Find All Possible Recipes from Given Supplies**
 *
 * You have information about `n` different recipes. You are given a string array `recipes` and a 2D string array
 * `ingredients`. The `ith` recipe has the name `recipes[i]`, and you can **create** it if you have **all** the needed
 * ingredients from `ingredients[i]`. A recipe can also be an ingredient for **other** recipes, i.e., `ingredients[i]`
 * may contain a string that is in `recipes`.
 *
 * You are also given a string array `supplies` containing all the ingredients that you initially have, and you have an
 * infinite supply of all of them.
 *
 * Return *a list of all the recipes that you can create.* You may return the answer in **any order**.
 *
 * Note that two recipes may contain each other in their ingredients.
 *
 * **Constraints:**
 *
 * - `n == recipes.length == ingredients.length`
 * - `1 <= n <= 100`
 * - `1 <= ingredients[i].length, supplies.length <= 100`
 * - `1 <= recipes[i].length, ingredients[i][j].length, supplies[k].length <= 10`
 * - `recipes[i], ingredients[i][j]`, and `supplies[k]` consist only of lowercase English letters.
 * - All the values of `recipes` and `supplies` combined are unique.
 * - Each `ingredients[i]` does not contain any duplicate values.
 *
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
const findAllRecipes = function (recipes, ingredients, supplies) {
    const n = recipes.length;
    const suppliesSet = new Set(supplies); // For O(1) lookup of supplies
    const recipeSet = new Set(recipes); // For O(1) lookup of recipes

    // Build graph: ingredient recipe -> dependent recipes
    const graph = new Map();
    const indegree = new Map();
    const ingredientMap = new Map(); // Store ingredients for each recipe
    for (let i = 0; i < n; i++) {
        const recipe = recipes[i];
        graph.set(recipe, []);
        indegree.set(recipe, 0);
        ingredientMap.set(recipe, ingredients[i]);
    }

    // Construct graph and compute in-degree
    for (let i = 0; i < n; i++) {
        const recipe = recipes[i];
        const ings = ingredients[i];
        for (const ing of ings) {
            if (recipeSet.has(ing)) {
                graph.get(ing).push(recipe);
                indegree.set(recipe, (indegree.get(recipe) || 0) + 1);
            }
        }
    }

    // Initialize queue with recipes that have no recipe dependencies
    // and all non-recipe ingredients in supplies
    const queue = [];
    const made = new Set(); // Track made recipes
    for (let i = 0; i < n; i++) {
        const recipe = recipes[i];
        if (indegree.get(recipe) === 0) {
            const ings = ingredients[i];
            let canMake = true;
            for (const ing of ings) {
                if (!recipeSet.has(ing) && !suppliesSet.has(ing)) {
                    canMake = false;
                    break;
                }
            }
            if (canMake) {
                queue.push(recipe);
            }
        }
    }

    // BFS to process recipes
    const result = [];
    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current);
        made.add(current);

        // Process dependent recipes
        for (const dependent of graph.get(current)) {
            indegree.set(dependent, indegree.get(dependent) - 1);
            if (indegree.get(dependent) === 0) {
                // Check if all ingredients are satisfied
                const ings = ingredientMap.get(dependent);
                let canMake = true;
                for (const ing of ings) {
                    if (!recipeSet.has(ing)) {
                        // Non-recipe ingredient must be in supplies
                        if (!suppliesSet.has(ing)) {
                            canMake = false;
                            break;
                        }
                    } else {
                        // Recipe ingredient must be made
                        if (!made.has(ing)) {
                            canMake = false;
                            break;
                        }
                    }
                }
                if (canMake) {
                    queue.push(dependent);
                }
            }
        }
    }

    return result;
};
