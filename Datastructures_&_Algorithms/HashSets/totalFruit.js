/**
 * **904. Fruit Into Baskets**
 *
 * You are visiting a farm that has a single row of fruit trees arranged from
 * left to right. The trees are represented by an integer array `fruits` where
 * `fruits[i]` is the **type** of fruit the `ith` tree produces.
 *
 * You want to collect as much fruit as possible. However, the owner has some
 * strict rules that you must follow:
 *
 * - You only have two baskets, and each basket can only hold a **single
 * type** of fruit. There is no limit on the amount of fruit each basket can
 * hold.
 * - Starting from any tree of your choice, you must pick **exactly one
 * fruit** from **every** tree (including the start tree) while moving to the
 * right. The picked fruits must fit in one of your baskets.
 * - Once you reach a tree with fruit that cannot fit in your baskets, you
 * must stop.
 *
 * Given the integer array `fruits`, return *the **maximum** number of
 * fruits you can pick*.
 *
 * **Constraints:**
 *
 * - `1 <= fruits.length <= 105`
 * - `0 <= fruits[i] < fruits.length`
 *
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = function (fruits) {
    let left = 0;
    let right = 0;
    let basket = new Map();
    let maxFruits = 0;

    // Move the right pointer forward until we have more than 2 unique types of fruits in our basket
    while (right < fruits.length) {
        let fruit = fruits[right];
        if (!basket.has(fruit)) basket.set(fruit, 0);
        basket.set(fruit, basket.get(fruit) + 1);

        // Move the left pointer forward until we have 2 or less unique types of fruits in our basket
        while (basket.size > 2) {
            let leftFruit = fruits[left];
            basket.set(leftFruit, basket.get(leftFruit) - 1);
            if (basket.get(leftFruit) === 0) basket.delete(leftFruit);
            left++;
        }

        // Update maxFruits with the maximum number of fruits we can pick in this window
        maxFruits = Math.max(maxFruits, right - left + 1);
        right++;
    }

    return maxFruits;
};

const fruits = [1, 2, 1];
// Output: 3
// Explanation: We can pick from all 3 trees.
console.log(totalFruit(fruits));

const fruits1 = [0, 1, 2, 2];
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
console.log(totalFruit(fruits1));
